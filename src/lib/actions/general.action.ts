import { db } from "@/firebase/admin";

export async function getInterviewById(id: string): Promise<Interview|null>{
    const interviews=await db.collection('interviews')
    .doc(id)
    .get()

    return interviews.data() as Interview | null;
}