// Mapping for Firebase Authentication + Firestore Error messages

const firebaseErrorMessages = {
  // Firebase error messages and user-friendly messages go here like key-pair below:
  "auth/invalid-email": "Invalid or improperly formatted email.",
  "auth/user-disabled": "This account has been disabled by an admin.",
  "auth/user-not-found": "No user found. Please create account.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/weak-password": "The password is too weak. (<6 char)",
  "auth/email-already-in-use": "This email is already in use.",
  "auth/missing-email": "Please enter in a valid email.",
  // Add other error messages as needed (check documentation) . . .
};

export function getFirebaseErrorMessage(errorCode) {
  console.log("Code from Firebase Error Mapping: ", errorCode);
  return firebaseErrorMessages[errorCode] || "An unknown error occurred.";
}
