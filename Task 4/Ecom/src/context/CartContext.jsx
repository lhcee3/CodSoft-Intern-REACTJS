import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init);

    const addToCart = (item) => {
        setCart([...cart, item])
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.amount, 0)
    }

    const removeFromCart = (id) => {
        setCart( cart.filter(item => item.id !== id) )
    }

    const totalProducts = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{ cart, addToCart, isInCart, emptyCart, totalPrice, removeFromCart, totalProducts }}>
            {children}
        </CartContext.Provider>
    )
}