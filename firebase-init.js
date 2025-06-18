// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAEd9kZffcUuArErVWNeoDUO4bd0R2C9NQ",
    authDomain: "tigermartialarts-b4bcc.firebaseapp.com",
    projectId: "tigermartialarts-b4bcc",
    storageBucket: "tigermartialarts-b4bcc.firebasestorage.app",
    messagingSenderId: "65478282279",
    appId: "1:65478282279:web:21073b549ad19132b1d202"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make available globally
window.firebaseDB = db;
window.addDocToCollection = addDoc;
window.enrollmentsCollection = collection(db, "enrollments");
