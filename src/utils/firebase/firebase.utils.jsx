import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvtYmjFZibBwquX07K7Wjrko1K5ain_cg",
  authDomain: "gym-daze-db.firebaseapp.com",
  projectId: "gym-daze-db",
  storageBucket: "gym-daze-db.appspot.com",
  messagingSenderId: "226141451700",
  appId: "1:226141451700:web:2d2c279791da5ea80aeee1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("error createing user");
    }
    return userDocRef;
  }

  // if user data doesn't exist...
  // create / set the document with the data from userAuth in my collection

  // if user data exists...

  //return userDocRef
};
