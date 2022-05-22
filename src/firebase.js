import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVIKKIJ_jHfSf44GwXJ1SmJ80putvG6hg",
  authDomain: "react-auth-4120b.firebaseapp.com",
  projectId: "react-auth-4120b",
  storageBucket: "react-auth-4120b.appspot.com",
  messagingSenderId: "582341729256",
  appId: "1:582341729256:web:a3d18bc9dd2b621b0f225d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID