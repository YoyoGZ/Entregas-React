import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";


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

export async function getLibros(){
    const librosCollectionRef = collection(db, "libros1");
    const snapshot = await getDocs(librosCollectionRef);
    const arrayDocs = snapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id } 
})
return dataDocs;

}

export async function getLibroById(id){
    const docRef = doc(db, "libros1", id);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data()};
}

export async function getGeneroLibro(genero){
// const q = query(collection(db, "cities"), where("capital", "==", true));
    const librosCollectionRef = collection(db, "libros1");
    const q = query(librosCollectionRef, where("genero", "==", genero));
    const snapshot = await getDocs(q);
    const arrayDocs = snapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id } 
})
return dataDocs;
}

export async function createOrder(data){
    const orderCollectionRef = collection(db, "orders");

    const respuesta = await addDoc(orderCollectionRef, data)
    return respuesta.id
}