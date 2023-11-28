// Mapping for the Firestore DB errors when performing requests

const firestoreErrorMessage = {
  ABORTED:
    "The server is currently busy. Please wait a few minutes and try again.",
  ALREADY_EXISTS:
    "The doc attempting to be inserted already exists. Please double-check request.",
  DEADLINE_EXCEEDED: "Server request timed out",
  FAILED_PRECONDITION:
    "Pre-condition failed. Please check request response message.",
  INTERNAL:
    "An internal server error occurred. Please try again. Do not attempt this operation again. Contact admin.",
  INVALID_ARGUMENT:
    "The request contained an invalid argument. Please double-check the request. ",
  NOT_FOUND:
    "The doc/value was not found. Please double-check request or consider inserting a new doc.",
  PERMISSION_DENIED:
    "Request denied. You may not be authorized to perform this request. Contact admin.",
  RESOURCE_EXHAUSTED:
    "Request unable to be completed at this time. Do not attempt this operation again. Contact admin.",
  UNAUTHENTICATED:
    "Request failed. Authentication credentials missing. Please double-check the request or contact admin.",
  UNAVAILABLE:
    "The server is experiencing issues. Please wait a few minutes and try again.",
};

export function getFirestoreErrorMessage(errorCode) {
  // console.log(errorCode);
  return firestoreErrorMessage[errorCode] || "An unknown error occurred.";
}
