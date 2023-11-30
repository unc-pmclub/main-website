import {useState} from "react";
import { auth } from "../../firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function sendPasswordReset (email) {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        // Password reset email successfully sent
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw(error.code, error.message)
    });

}
