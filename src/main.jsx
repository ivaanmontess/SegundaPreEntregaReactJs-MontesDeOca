import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyClxkVWSD0_TZm4YzroDebTUwq2fujQjt4",

  authDomain: "my-ecommerce-react-js-coder.firebaseapp.com",

  projectId: "my-ecommerce-react-js-coder",

  storageBucket: "my-ecommerce-react-js-coder.appspot.com",

  messagingSenderId: "599097115525",

  appId: "1:599097115525:web:1c20049c09adb165f0faec"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
