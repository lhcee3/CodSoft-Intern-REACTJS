import { Item } from "../Item/Item"
import { useNavigate } from "react-router-dom"

export const ItemList = ({products}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen">
            { products.length === 0
                ?
                <div className="flex justify-center items-center flex-col gap-10">
                    <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">¡We couldn't find any products!</h2>
                    <img
                        className="w-full object-cover rounded-md"
                        style={{height: "40rem"}}
                        src="https://images.pexels.com/photos/164446/pexels-photo-164446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Banner image"
                    />
                    <button className="block w-60 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Go back</button>
                </div>
                : <h2 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-900 leading-tight">Check out our latest deals !</h2>
            }
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-9">
                {products.map((prod) => <Item key={prod.id} prod={prod} />)}
            </section>
        </div>
    )
}