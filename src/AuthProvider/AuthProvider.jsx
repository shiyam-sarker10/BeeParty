import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from './../config/firebase';




export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const CreateUser = (email, password) => {
  setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
};

const userSignIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};


const GoogleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};
const GithubSignIn= () =>{
  setLoading(true);
    return signInWithPopup(auth, githubProvider);
}

const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const UserUpdate = (name, img) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [user]);




    const authInfo = {
      GoogleSignIn,
      GithubSignIn,
      CreateUser,
      userSignIn,
      user,
      logOut,
      UserUpdate,
      loading
    };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;