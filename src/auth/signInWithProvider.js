import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { handleFirestoreUser } from "./handleFirestoreUser";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase.config";
import { displaySuccess } from "../utils/modalHelpers";


// Specify additional scopes below:
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

const getProvider = (providerType) => {
    switch (providerType) {
        case "google":
            return new GoogleAuthProvider();
        case "github":
            return new GithubAuthProvider();
        default:
            throw new Error("Invalid provider type");
    }
}

export const signInWithProvider = async (providerType, setModalInfo) => {
    // Create instance of Google provider object
    const provider = getProvider(providerType);
    const successMessage = "Your request to create an account has been received. Please check your email for confirmation. If approved, you will be notified via email.";


    // Implicit language preference
    auth.useDeviceLanguage();

    try {
        const userCredential = await signInWithPopup(auth, provider);
        const firebaseUser = userCredential.user;

        if (firebaseUser) {
            await handleFirestoreUser(firebaseUser);
            displaySuccess(successMessage, setModalInfo);
        }
    } catch (error) {
        throw error
    }

}