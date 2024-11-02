import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"

export const Cart = () => {
    const { cart, emptyCart, totalPrice, removeFromCart } = useContext(CartContext)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    if(cart.length === 0 ){
        return (
            <div className="container mx-auto min-h-screen">
                <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your cart is empty</h2>
                <hr />
                <div className="mt-5">
                    <p className="text-xl font-medium">Let's buy something cool for your pet.</p>
                    <Link to="/" className="mt-3 rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-60 text-white bg-darkBgColor hover:border-primaryColor focus:outline-none">Go shopping</Link>
                </div>
            </div>
        )
    }

    return(
        <div className="container mx-auto min-h-screen">
            <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your purchase</h2>
            <hr />
            {
                cart.map(item => (
                    <div className="px-5 py-1 bg-white even:bg-gray-100 mt-3 w-full flex items-center justify-between" key={item.id}>
                        <div>
                            <h4 className="text-lg font-bold">{item.name}</h4>
                               <p className="text-lg font-medium">Amount: {item.amount}</p>
                                <p className="text-lg font-medium">Unit price: Rs {item.price}</p>
                                <p className="text-lg font-medium">Total price: Rs {(item.price * item.amount).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button onClick={() => removeFromCart(item.id)} className="block font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Remove from cart</button>
                        </div>
                     </div>
                ))
            }
            <hr />
            <div className="mt-3">
                <h4 className="text-2xl font-extrabold">Total: Rs { totalPrice().toFixed(2) }</h4>
                <div className="flex justify-between mt-3">
                    <div>
                        <button className="block w-40 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
                    </div>
                    <div className="flex items-center gap-8">
                        <button onClick={emptyCart} className="block w-40 font-bold text-white bg-red-500 hover:border-red-200 active:bg-red-800 focus:outline-none">Empty cart</button>
                        <Link to="/checkout" className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-40 font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Buy cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}