import { useContext } from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export const ItemDetail = ( {id, name, description, image, price, stock, category} ) => {
    const { addToCart, isInCart } = useContext(CartContext);

    const [amount, setAmount] = useState(1)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        const item = { id, name, description, image, price, stock, category, amount }
        addToCart(item)
    }

    if(name === undefined){
        return(
            <div className="flex flex-col items-center">
                <div>
                    <h2 className="text-center inline-block text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Sorry we couldn't find that page</h2>
                    <p className="text-4xl font-bold text-slate-700 text-center">Try visiting another page or go to <Link to="/" className="text-primaryColor hover:underline"><Zeta></Zeta> home page</Link></p>
                </div>
                <div>
                    <img
                        className="object-cover rounded-md mt-5"
                        style={{height: "40rem", width: "85rem"}}
                        src="https://images.pexels.com/photos/164446/pexels-photo-164446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Banner image"
                    />
                </div>
                <button className="mt-6 block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Go back</button>
            </div>
            
        )
    }else{
        return (
            <div className="grid lg:grid-cols-2 mt-14 justify-items-center gap-8 min-h-screen">
                <div>
                    <img className="detail-image" src={image} alt="product image" />
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="font-bold text-5xl">{name}</h2>
                        <small>Category: {category}</small>
                    </div>
                    <p className="text-xl font-medium">{description}</p>
                    <p className="text-5xl font-bold">Rs {price}</p>
                    {
                        !isInCart(id)
                            ?  <ItemCount
                                    amount={amount}
                                    setAmount={setAmount}
                                    max={stock}
                                    onAdd={handleAdd}
                                />
                                
                            : <div className="flex items-center gap-5">
                                <Link to="/cart" className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-60 text-white bg-primaryColor hover:border-violet-200 active:bg-violet-800 focus:outline-none">Finish my purchase</Link>
                                <button onClick={handleBack} className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-60 text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Keep buying</button>
                              </div>
                            
                            
                    } 
                   
                    <hr />
                    <button className="block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
                </div>
            </div>
        )
    }
}