//**Config Firebase */*
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, writeBatch } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "first-reactproyect2023",
  storageBucket: "first-reactproyect2023.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
  appId: "1:1074029286822:web:8131b6dd69a03b2fc9ab67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
  
    console.log(orderData);
  
    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);
  
    return response.id;
  }
  
  /* Opcional */
  export async function exportData() {
    //for ... of
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const { id } = await addDoc(collectionRef, item);
      console.log("Documento creado", id);
    }
  }
  
  export async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      const newDoc = doc(collectionRef);
      batch.set(newDoc, item);
    }
  
    const resp = await batch.commit();
    console.log(resp);
  }