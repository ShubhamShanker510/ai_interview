'use server';

import { auth, db } from "@/firebase/admin";

import { cookies } from "next/headers";

export async function signUp(params: SignUpParams) {
    const { uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: 'User already exists',
            }
        }

        await db.collection('users').doc(uid).set({
            name,
            email,
        })

        return {
            success: true,
            message: "Account created successfully",
        }
    } catch (error: any) {
        console.log('Error createing user:', error);

        if (error.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'Email already exists',
            }
        }
    }

    return {
        success: false,
        message: "Failed to create account"
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();
    console.log("cookieStore", cookieStore)

    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn: 60 * 60 * 24 * 7 * 1000 });
    console.log('sessionCookie=>', sessionCookie); // Log the cookie content to verify

    cookieStore.set('session', sessionCookie, {
        maxAge: 60 * 60 * 24 * 7 * 1000,
        // httpOnly: true,
        // secure: process.env.NODE_ENV === 'production', // true in production, false for local testing
        // path: '/',
        // sameSite: 'lax',
    });

    // Log cookie store to check if it was set
    console.log('cookies after set:', cookieStore);
}


export async function signIn(params: SignInParams) {
    const { email, idToken } = params;
    console.log("idToken", email, idToken)

    try {
        const userRecord =await auth.getUserByEmail(email)

        if (!userRecord) {
            console.log('No such user document found!');
            return {
                success: false,
                message: 'User does not exist',
            };
        }

        // Now you can safely access the data
        console.log('User data:', userRecord);

        const result = await setSessionCookie(idToken);
        console.log("result", result)

        return {
            success: true,
            message: "Sign in successfully",
        }
    } catch (error: any) {
        console.log('Error signing in:', error);

        if (error.code === 'auth/user-not-found') {
            return {
                success: false,
                message: 'User does not exist',
            }
        }
    }

    return {
        success: false,
        message: "Failed to sign in"
    }
}

export async function getCurrentUser(): Promise<User | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();

        if (!userRecord.exists) {
            return null;
        }

        return {
            ...userRecord.data(),
            id: userRecord.id,
        } as User;
    } catch (error) {
        console.log('Error getting current user:', error);
        return null;
    }
}

export async function isAuthenticated() {
    const user = await getCurrentUser();

    return !!user;
}