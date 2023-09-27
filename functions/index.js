/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const gmailEmail = "uncpmclub@gmail.com";
const gmailPassword = functions.config().app.email_password; // Accessing environment variable

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.newUserNotification = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snap, context) => {
      const newUser = snap.data();

      // Email to admin
      await mailTransport.sendMail({
        from: gmailEmail,
        to: "uncpmclub@gmail.com",
        subject: "New Account Request Received",
        text: `A new account request has been received from ${newUser.displayName}. Please check Firestore to approve or deny.`,
      });

      // Email to the user
      await mailTransport.sendMail({
        from: gmailEmail,
        to: newUser.email,
        subject: "Your Account Request",
        text: `${newUser.displayName}, \n\nYour request to create an account has been received. We will notify you once your account is approved.\n\nBest Regards,\nPM Club Exec Team`,
      });

      return null;
    });

exports.approvedUserNotification = functions.firestore
    .document("users/{userId}")
    .onUpdate(async (change, context) => {
      const newValue = change.after.data();
      const previousValue = change.before.data();

      if (previousValue.approved === false && newValue.approved === true) {
        await mailTransport.sendMail({
          from: gmailEmail,
          to: newValue.email,
          subject: "Your Account is Approved",
          text: `${newValue.displayName},\n\nCongratulations! Your account has been approved. You can now sign in to uncpmclub.com using the email and password you provided.\n\nBest Regards,\nPM Club Exec Team`,
        });
      }

      return null;
    });
