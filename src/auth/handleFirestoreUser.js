import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const handleFirestoreUser = async (firebaseUser) => {
    const uid = firebaseUser.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        await setDoc(docRef, {
            approved: false,
            displayName: firebaseUser.displayName,
            email: firebaseUser.email
        });
    }
}
