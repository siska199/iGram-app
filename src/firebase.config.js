import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBTvhHz8X7JvRlcPB4tRff9GVSONNnaXO4",
  authDomain: "igram-9889c.firebaseapp.com",
  projectId: "igram-9889c",
  storageBucket: "igram-9889c.appspot.com",
  messagingSenderId: "1038525526990",
  appId: "1:1038525526990:web:0f203ff3e234809dbb719f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {app, db, storage}