import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
import UseAxiosOpen from '../hooks/UseAxiosOpen/UseAxiosOpen';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodging, setLoading] = useState(true);
  const axiosOpen = UseAxiosOpen();
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubProviders = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const signInWithEmailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updeateProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    // setUser(null);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      
      setLoading(false);
      setUser(currentUser);
      currentUser;
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        userInfo;
        axiosOpen.post('/jwt', userInfo).then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
          }
        });
      } else {
        localStorage.removeItem('access-token');
      }
      return () => {
        unsubscribe();
      };
    });
  }, [axiosOpen]);
  const authInfo = {
    createNewUser,
    loginWithGoogle,
    user,
    lodging,
    gitHubProviders,
    signInWithEmailAndPass,
    logOut,
    updeateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
