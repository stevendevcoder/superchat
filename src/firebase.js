import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9hfaWNPhiU66D9wV9VfhgNwq7ttCEJGY",
  authDomain: "superchat-8d00a.firebaseapp.com",
  projectId: "superchat-8d00a",
  storageBucket: "superchat-8d00a.appspot.com",
  messagingSenderId: "224485982788",
  appId: "1:224485982788:web:3484111053e742074cb211"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)