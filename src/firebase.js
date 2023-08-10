import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3ls7NWFXhPRKjS2YlKkLeMQWmR7R1wD8",
  authDomain: "step-one-2023.firebaseapp.com",
  projectId: "step-one-2023",
  storageBucket: "step-one-2023.appspot.com",
  messagingSenderId: "969428720740",
  appId: "1:969428720740:web:902804e3eade799d1e5371"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const usersRef = collection(db, "users");
export const tasksRef = collection(db, "tasks");

export const imageListRef = ref(storage, "avatars/");
export default app;
