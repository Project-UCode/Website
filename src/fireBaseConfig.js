import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUBg0R7N2iTK5FOQICgjvzxhjgfBinXs4",
    authDomain: "ucode-python-lessons.firebaseapp.com",
    projectId: "ucode-python-lessons",
    storageBucket: "ucode-python-lessons.firebasestorage.app",
    messagingSenderId: "1066121844994",
    appId: "1:1066121844994:web:0519c4d8302a6730e50a1b",
    measurementId: "G-TXDXW2608C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};