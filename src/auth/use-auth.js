import React, { useContext, useEffect, useState } from "react";
import { collection, query, where, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase.config";

const usersRef = collection(db, "users");

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Potentially not needed, copied from another project
          const uid = firebaseUser.uid;

          // Fetching user-specific data
          const docRef = doc(usersRef, uid);
          const userDoc = await getDoc(docRef);

          // Set user to object of uid and approved status (don't forget spread operator)
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Document Data", "=>", userDoc.data());

            if (userData.approved) {
              setUser({
                ...userData,
              });
            } else {
              setError("Your account is pending approval.");
            }
          } else {
            console.log("No such document exists!");
            setUser(false);
            signOut(auth);
          }
        } catch (err) {
          setError("An error occurred during Firebase authentication.");
          console.error("An error occurred during authentication", "=>", err);
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
