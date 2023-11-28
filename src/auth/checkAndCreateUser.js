import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { displaySuccess } from "../utils/modalHelpers";

export const checkAndCreateUser = async (user) => {
    const userRef = doc(db, "users", user.uid);

    // console.log("user data for creation:", user.email, user.displayName);
    
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
        // Set initial values for document
        await setDoc(userRef, {
        approved: false,
        displayName: user.displayName,
        email: user.email,
      });

      return true
    } else {
        return false;
    }

}