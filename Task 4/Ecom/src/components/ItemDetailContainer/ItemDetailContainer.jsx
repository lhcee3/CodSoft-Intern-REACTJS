import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        // 1. reference
        const docRef = doc(db, "products", itemId)

        // 2. async request
        getDoc(docRef)
            .then((doc) => {
                setItem( {...doc.data(), id: doc.id } )
            })
    }, [itemId])

    return(
        <div className="container mx-auto">
            {
                item && <ItemDetail {...item}/>
            }
        </div>
    )
}