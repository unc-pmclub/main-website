import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";

export async function createUser(email, password, displayName) {
  try {
    // Create new user w/ email and password using firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;

    // Obtain UID of new user
    const uid = firebaseUser.uid;

    // Create doc in firestore users collection with UID
    const userDocRef = doc(db, "users", uid);

    // Set initial values for document
    await setDoc(userDocRef, {
      approved: false,
      displayName: displayName,
      email: email,
    });

    console.log("user created successfully!");
  } catch (error) {
    console.error("Error creating user: ", error.message);
    throw error; // Throwing to display error to user
  }
}
