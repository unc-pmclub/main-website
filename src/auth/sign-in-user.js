import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    throw error;
  }
}
