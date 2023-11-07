import React, { useState, useEffect, } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      return onAuthStateChanged(auth, async (firebaseUser) => {
        console.log('Firebase Auth User:', firebaseUser);
        setLoading(true);
          if (firebaseUser) {
              const uid = firebaseUser.uid;
              const docRef = doc(db, "users", uid);
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
                  const userData = docSnap.data();
                  if (userData.approved) {
                      setUser(userData);
                      console.log("User Data: ", user);
                  } else {
                      setError("Your account is pending approval...");
                      setUser(false);
                  }
              } 
            } else {
                setUser(false);
            }
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (user === false) {
            signOut(auth);
        }
    }, [user]);

    return {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading
    };
}
