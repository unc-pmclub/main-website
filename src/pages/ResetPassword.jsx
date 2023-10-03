// TODO:
//  - Add clickable text to return to sign in page

import React, {useState} from "react";

import Header from "../partials/Header";
import Banner from "../partials/Banner";
import { Link, useActionData } from "react-router-dom";
import sendPasswordReset from "../auth/reset-password";
import BasicModal from "../partials/Modal";


function ResetPassword() {
  const [email, setEmail] = useState("");
  const [modalInfo, setModalInfo] = useState(null);

  
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordReset(email);
      setModalInfo({
        type: "confirmation",
        modalHeaderColor: "#00b300",
        header: "Success!",
        message: "Password reset email has been sent. Please check your email"
      });
    } catch (error) {
      setModalInfo({
        type: "error",
        header: error.code,
        message: error.message
      });
    };
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Let’s get you back up on your feet</h1>
                <p className="text-xl text-gray-600">
                  Enter the email address you used when you signed up for your
                  account, and we’ll email you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={handleResetPassword}>
                        Send reset link
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600 hover:underline hover:text-blue-600 text-center mt-6">
                    <Link to="/uncpm-dev-website/signin">Back to Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {modalInfo && (
        <BasicModal
          open={true}
          onClose={() => setModalInfo(null)}
          header={modalInfo.header}
          message={modalInfo.message}
          headerBackgroundColor={modalInfo.type === "confirmation" ? modalInfo.modalHeaderColor : undefined}
        />
      )}
    </div>
  );
}

export default ResetPassword;
