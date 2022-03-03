import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBs-lhJfQdsA897d8Ut-WqOdc7hIbxmX_Q",
  authDomain: "policy-compare-app.firebaseapp.com",
  projectId: "policy-compare-app",
  storageBucket: "policy-compare-app.appspot.com",
  messagingSenderId: "531086697185",
  appId: "1:531086697185:web:979bbab28c6b8e51d10da0"
};
const app = initializeApp(firebaseConfig);
 export const authentication = getAuth(app);