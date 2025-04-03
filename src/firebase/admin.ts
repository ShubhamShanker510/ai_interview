// Import necessary functions from the Firebase Admin SDK
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";  // For Firebase Authentication
import { getFirestore } from "firebase-admin/firestore";  // For Firestore database

// Function to initialize Firebase Admin SDK and provide access to Firebase services
const initFirebaseAdmin = () => {
    // Get all the Firebase apps currently initialized in the environment
    const apps = getApps();
    
    // Check if no Firebase apps have been initialized yet
    if (!apps.length) {
        // Initialize the Firebase app with the provided credentials
        initializeApp({
            credential: cert({
                // Credentials taken from environment variables (for security)
                projectId: process.env.FIREBASE_PROJECT_ID,  // Your Firebase project ID
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,  // The service account email
                // The private key for authentication; we replace escaped newline characters with actual newlines
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            })
        });
    }
    
    // Return instances of Firebase Authentication and Firestore services
    // These instances will be used to interact with Firebase Auth and Firestore in the app
    return {
        auth: getAuth(),  // Returns an instance of Firebase Authentication
        db: getFirestore(),  // Returns an instance of Firestore
    };
};

// Call the initFirebaseAdmin function and destructure the returned values
// This gives us direct access to Firebase Auth and Firestore
export const { auth, db } = initFirebaseAdmin();
