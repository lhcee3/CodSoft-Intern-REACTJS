import {useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

export const SeeMyOrders = () => {
    const [orders, setOrders] = useState([])
    const [email, setEmail] = useState('')
    const [searched, setSearched] = useState(false)

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearched(true)
    }

    useEffect(() => {
        const ordersRef = collection(db, "orders")
        const q = query(ordersRef, where("buyer.email", "==", email))
    
        getDocs(q)
            .then((res) => {
                setOrders( res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }) )
            })
            .finally(() => {
                setSearched(false)
            })
    }, [searched])

    return(
        <div className="container mx-auto min-h-screen">
            <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">See my orders</h2>
            <hr />
            <form className="mt-3 flex items-center" onSubmit={handleSubmit}>
                <input
                    type="email"
                    onChange={handleInputChange}
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    className="h-14 text-lg border-2 border-slate-300 rounded-l-lg p-3 focus:outline-none focus:border-primaryColor"
                />
                <button type="submit" className="w-40 h-14 font-bold text-white bg-primaryColor hover:border-violet-200 active:bg-violet-800 focus:outline-none rounded-none rounded-r-lg">Search</button>
            </form>
            <div>
                {
                    orders.length > 0
                    ?
                    <div className="mt-5">
                        {orders.map((order) => {
                            return(
                                <div>
                                    <h3 className="text-2xl font-extrabold my-3">Order: {order.id}</h3>
                                    {order.items.map((item ,i) => {
                                    return(
                                        <div key={i} className="w-full">
                                            <h4 className="text-lg font-bold">{item.name}</h4>
                                            <p className="text-lg font-medium">Amount: {item.amount}</p>
                                            <p className="text-lg font-medium">Unit price: Rs {item.price}</p>
                                            <p className="text-lg font-medium">Total price: Rs {(item.price * item.amount).toFixed(2)}</p>
                                            <hr />
                                       </div>
                                    )
                                })}
                                </div>
                            )
                        })}
                    </div>
                    : <p className="mt-5 text-lg font-medium">It seems that you have not entered your email correctly or we have not been able to find any order for that email.</p>
                }  
            </div>
        </div>
    )
}