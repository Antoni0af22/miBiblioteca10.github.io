import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore, addDoc, collection, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBxqJDKjpSTj4Jr-NBRXER6IxdeQnF8-F0",
  authDomain: "mibiblioteca10-61ede.firebaseapp.com",
  projectId: "mibiblioteca10-61ede",
  storageBucket: "mibiblioteca10-61ede.appspot.com",
  messagingSenderId: "229119906632",
  appId: "1:229119906632:web:d0066bbcde983e79d4197d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

//guardar libro
export const saveLibro = (titulo, autor, editorial, isbn, fecha) =>
    addDoc(collection(db, "libros"), { titulo, autor, editorial, isbn, fecha });

//lista libros
export const onGetLibros = (callback) => onSnapshot(collection(db,'libros'),callback)
