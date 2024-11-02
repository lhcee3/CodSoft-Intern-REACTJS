import './CartWidget.css'
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)

    return(
        <div className="relative text-white">
            <FiShoppingCart className="text-4xl mr-4 cursor-pointer text-current hover:text-primaryColor ease-in-out duration-200"/>
            <p className="absolute leading-3 text-base text-current font-bold top-0 right-0 p-2 bg-violet-600 rounded-full cart-number">{totalProducts()}</p>
        </div>
    )
}