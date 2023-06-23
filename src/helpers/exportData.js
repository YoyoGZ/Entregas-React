import libros from "../components/data/libros"

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlWv3tHkFKuA_4k-B0pZmLGj5G_8E_7Ko",
  authDomain: "proyecto-wrabbit.firebaseapp.com",
  projectId: "proyecto-wrabbit",
  storageBucket: "proyecto-wrabbit.appspot.com",
  messagingSenderId: "704273566903",
  appId: "1:704273566903:web:b6a353bf51a0423acb5132"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export async function exportData(){
    const librosCollectionRef = collection(db, "libros1");
    for(let item of libros){
        delete item.id;
        const resp = await addDoc(librosCollectionRef,item)
        console.log( "Documento creado", resp.id);
    }
    
}