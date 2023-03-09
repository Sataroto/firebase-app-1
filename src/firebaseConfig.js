import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCqDEOSK910U35gw76V8jqR7Uu7BG4gQo4",
  authDomain: "vue-3-2023-87c0b.firebaseapp.com",
  projectId: "vue-3-2023-87c0b",
  storageBucket: "vue-3-2023-87c0b.appspot.com",
  messagingSenderId: "709382448683",
  appId: "1:709382448683:web:6fb46f19064706f1306c6e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then( (userCredential) =>{
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const erroMessage = error.message;
    });

export {auth};