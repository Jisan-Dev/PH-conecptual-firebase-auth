/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './firebase/firebase.config';

export const AuthContext = createContext(null);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const authInfo = { createUser };

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
