import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAWgDvBlwyVI-jncHow20scZdiN6xch7ks",
    authDomain: "twitter-clone-c9b74.firebaseapp.com",
    databaseURL: "https://twitter-clone-c9b74.firebaseio.com",
    projectId: "twitter-clone-c9b74",
    storageBucket: "twitter-clone-c9b74.appspot.com",
    messagingSenderId: "1045269164946",
    appId: "1:1045269164946:web:358e62fa9193aa9ef9874b",
    measurementId: "G-4953GQGW4L"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
