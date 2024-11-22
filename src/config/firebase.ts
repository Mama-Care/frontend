import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOnHjyBOFHwh0JJ_b4nLM57mD487usLb0",
  authDomain: "mama-care-ed0dd.firebaseapp.com",
  projectId: "mama-care-ed0dd",
  storageBucket: "mama-care-ed0dd.firebasestorage.app",
  messagingSenderId: "482371140843",
  appId: "1:482371140843:web:285961fbb5b0be0c36d2ae",
  measurementId: "G-GF3XWWQ163"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };