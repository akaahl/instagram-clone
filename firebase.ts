// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDfyWgk1O3OY3p9N5UiQSeZZMKFC5SNIAo',
  authDomain: 'insta-clone-56476.firebaseapp.com',
  projectId: 'insta-clone-56476',
  storageBucket: 'insta-clone-56476.appspot.com',
  messagingSenderId: '193918400410',
  appId: '1:193918400410:web:0a25789cc5ad4a3d4fec23',
  measurementId: 'G-ZJ6DTRH1B2',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
