import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX8szn2xuEC9fRfQrLgIyF2wNP2UIQurQ",
  authDomain: "zia-birthday-rsvp.firebaseapp.com",
  projectId: "zia-birthday-rsvp",
  storageBucket: "zia-birthday-rsvp.appspot.com",
  messagingSenderId: "295479480307",
  appId: "1:295479480307:web:29431e27c51ecd63818c86",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
