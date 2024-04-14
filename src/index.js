import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Firebase stuff

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzYp-0gTWVRKDnR-IN-5L1X_BuN25ztd4",
  authDomain: "blog-react-recap-fb.firebaseapp.com",
  projectId: "blog-react-recap-fb",
  storageBucket: "blog-react-recap-fb.appspot.com",
  messagingSenderId: "191724980649",
  appId: "1:191724980649:web:98df1cc792b1d0fc0e9cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Index

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
