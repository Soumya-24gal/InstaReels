import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVU1pnMFLNUFn2-NGGYs3ErnwdHqI120s",
    authDomain: "reels-b583c.firebaseapp.com",
    projectId: "reels-b583c",
    storageBucket: "reels-b583c.appspot.com",
    messagingSenderId: "477642343986",
    appId: "1:477642343986:web:dbf25d08dbe25ec45bde2b",
    measurementId: "G-P070NX001R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp


}
export const storage = firebase.storage();