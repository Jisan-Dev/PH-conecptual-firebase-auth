// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlq4ZpwTJdo9nuKglfu5NL565kBXRqhMU',
  authDomain: 'auth-conceptual-a6ab4.firebaseapp.com',
  projectId: 'auth-conceptual-a6ab4',
  storageBucket: 'auth-conceptual-a6ab4.appspot.com',
  messagingSenderId: '394990669906',
  appId: '1:394990669906:web:057d177ad93b634d064f8b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
