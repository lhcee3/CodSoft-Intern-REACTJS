import {useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const { categoryId, search } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        // 1. reference
        const productsRef = collection(db, "products")
        const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef

        // 2. async request
        getDocs(q)
            .then((res) => {
                setProducts( res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                }) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId, search])

    return(
        <div className="container mx-auto">
            {
                loading
                    ?
                    <div className="min-h-screen">
                        <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">Loading...</h2>
                    </div> 
                    : <ItemList  products={products}/>
            }
        </div>
    )
}