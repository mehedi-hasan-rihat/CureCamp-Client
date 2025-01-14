import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React from "react";
import axios from "axios";
import auth from "../Firebase/FirebaseInit";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

//   const logOut = async () => {
//     setLoading(true);
//     const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
//       withCredentials: true,
//     });
//     return signOut(auth);
//   };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser?.email) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: currentUser?.email },
            {
              withCredentials: true,
            }
          );
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const { data } = await axios.get(
            "https://pathz.vercel.app/jwt-clear",
            { withCredentials: true }
          );
        } catch (err) {
          console.log(err);
        }
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
