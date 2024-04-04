/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase/firebase.config';

export const AuthContext = createContext(null);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const authInfo = { createUser, loginUser };

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
