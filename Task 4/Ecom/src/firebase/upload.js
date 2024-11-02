import { db } from "./config.js"
import data from "../data/data.json" assert { type: "json" }
import { addDoc, collection } from "firebase/firestore";

data.forEach(item => delete item.id);

const productsRef = collection(db, "products")

data.forEach(item => {
    addDoc(productsRef, item)
})