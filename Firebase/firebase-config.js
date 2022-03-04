import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCt0-oR09RUE8bNeCn6C19M4pOImiv6Mq8",
  authDomain: "policy-compare.firebaseapp.com",
  databaseURL: "https://policy-compare-default-rtdb.firebaseio.com",
  projectId: "policy-compare",
  storageBucket: "policy-compare.appspot.com",
  messagingSenderId: "1055258871574",
  appId: "1:1055258871574:web:b8b8b5d3e842793594f237"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };