import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCD6j8CMNuiWnDAk0WUqeKRAExnYyPp4Gw",
    authDomain: "game-ops-1f9ec.firebaseapp.com",
    projectId: "game-ops-1f9ec",
    storageBucket: "game-ops-1f9ec.appspot.com",
    messagingSenderId: "941428186126",
    appId: "1:941428186126:web:68db3bf0deb9008945705f",
    measurementId: "G-WHG364YFZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
