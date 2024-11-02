import { CartWidget } from "../CartWidget/CartWidget"
import { SearchBox } from "../SearchBox/SearchBox"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="z-10 w-full flex justify-between items-center bg-darkBgColor p-4 fixed top-0 shadow-xl">
            <div>
                <Link to="/">
                    <img className="w-14 hover:brightness-75 ease-in-out duration-200" src="/apple-touch-icon-180x180.png" alt="Zeta logo" />
                </Link>
            </div>
            <div className="flex-col md:flex-row flex items-center gap-10">
                {/* <SearchBox /> */}

                <ul className="grid grid-cols-2 md:flex gap-8 text-xl uppercase text-white flex-col md:flex-row">
                    <li> <NavLink to="/" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Home</NavLink> </li>
                    <li className="relative products-list-hover"> <p className="cursor-pointer text-current font-bold hover:text-primaryColor ease-in-out duration-200">Categories</p>    
                        <ul className="absolute bg-darkBgColor rounded-r-2xl rounded-l-2xl items-center p-5 products-list gap-10 text-xl uppercase text-white flex-col lg:flex-row">
                            <li> <NavLink to="/products/dogs" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Dogs</NavLink> </li>
                            <li> <NavLink to="/products/cats" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Cats</NavLink> </li>
                            <li> <NavLink to="/products/fishes" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Fishes</NavLink> </li>
                            <li> <NavLink to="/products/birds" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Birds</NavLink> </li>
                        </ul>
                    </li>
                    <li> <NavLink to="/about-us" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">About us</NavLink> </li>
                    <li> <NavLink to="/contact" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">Contact</NavLink> </li>
                    <li> <NavLink to="/seemyorders" className="text-current font-bold hover:text-primaryColor ease-in-out duration-200">See my orders</NavLink> </li>
                </ul>
            </div>
            <Link to="/cart" className={`ease-in-out duration-200 Rs {cart.length === 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}><CartWidget /></Link>
            
        </div>
        
    )
}