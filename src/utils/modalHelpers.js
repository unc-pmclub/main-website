import { getFirebaseErrorMessage } from "../auth/firebase-error-mapping";

export const displayError = (error, setModalInfo) => {
    let friendlyMessage;
    if (error && error.code) {
        friendlyMessage = getFirebaseErrorMessage(error.code);
    }
    setModalInfo({
        type: "error",
        header: "Error",
        message: friendlyMessage ? friendlyMessage : error
    });
};

export const displaySuccess = (message, setModalInfo) => {
    setModalInfo({
        type: "confirmation",
        modalHeaderColor: "#00b300",
        header: "Success!",
        message: message
    });

};