import React, { useContext, useEffect, useState } from "react";
import { collection, query, where, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase.config";


export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const usersRef = collection(db, "users");

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const uid = firebaseUser.uid;
          console.log((uid));
          // Fetching user-specific data
          // console.log(db, uid);
          // const docRef = doc(usersRef, uid);
          // const userDoc = await getDoc(docRef);

          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);

          // Check if document exists and whether their approved status is set to true (don't forget spread operator)
          if (docSnap.exists()) {
            const userData = docSnap.data();
            console.log("Document Data", "=>", docSnap.data());

            if (userData.approved) {
              setUser({
                ...userData,
              });
            } else {
              setError("Your account is pending approval. You will not be able to sign in until your request has been approved. Please keep an eye on your email.");
            }
          } else {
            console.log("No such document exists!");
            setUser(false);
            signOut(auth);
          }
        } catch (err) {
          setError("An error occurred during Firebase authentication.");
          console.error("An error occurred during authentication", "=>", err);
          setUser(false);
          signOut(auth);
        }
      } else {
        setUser(false);
      }
    });
  }, []);

  return {
    user,
    error,
  };
}
