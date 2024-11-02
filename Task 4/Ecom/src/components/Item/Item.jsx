import { Link } from "react-router-dom"

export const Item = ({prod}) => {
    return (
        <Link to={`/detail/Rs {prod.id}`} className="hover:shadow-xl hover:border-primaryColor pb-2 duration-200 w-80 border-solid border-2 border-slate-300 rounded">
            <img className="border-b-2 hover:border-primaryColor duration-200 border-slate-300 w-80 h-80 object-contain p-3" src={prod.image} alt="Product image" />
            <p className="text-center text-black font-medium text-lg">{prod.name}</p>
            {/* <p className="text-center text-black font-light text-sm p-3">{prod.description}</p> */}
            <p className="text-xl text-black font-extrabold text-center">Rs {prod.price}</p>   
        </Link>
    )
}