import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUfsDIu9eBJ_ciY7u2ptt51F2WpAxajJQ",
  authDomain: "instagram-clone-b6289.firebaseapp.com",
  projectId: "instagram-clone-b6289",
  storageBucket: "instagram-clone-b6289.appspot.com",
  messagingSenderId: "133348868063",
  appId: "1:133348868063:web:025523dec200dd7e2a8e6a",
  measurementId: "G-NXDTZE8JZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const db = firebaseApp.firestore();
