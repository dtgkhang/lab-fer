import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD8WmykL0j6CXhYdP3Wh2-u-QmTow3XbjY",
    authDomain: "img-trip.firebaseapp.com",
    projectId: "img-trip",
    storageBucket: "img-trip.appspot.com",
    messagingSenderId: "759507487126",
    appId: "1:759507487126:web:e76f6f6ebf1dd7a7feb5b7"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();