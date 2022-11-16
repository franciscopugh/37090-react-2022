import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-2022-a6130.firebaseapp.com",
  projectId: "react-2022-a6130",
  storageBucket: "react-2022-a6130.appspot.com",
  messagingSenderId: "792768142710",
  appId: "1:792768142710:web:26ce9b81b079ac8aedae57"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

export {cargarBDD, getProductos}