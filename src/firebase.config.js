import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAs3-QhsLoqozB87oy9P0cVqi8t_puIp-g',
  authDomain: 'cryptostalker-18727.firebaseapp.com',
  projectId: 'cryptostalker-18727',
  storageBucket: 'cryptostalker-18727.appspot.com',
  messagingSenderId: '620198505951',
  appId: '1:620198505951:web:ff6ab2f9ccfbd9156aa86a',
  measurementId: 'G-W01MPN2N4V',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const db = firebase.firestore();
