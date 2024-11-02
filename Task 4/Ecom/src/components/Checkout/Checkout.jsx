import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, getDoc, getDocs, doc, writeBatch, query, where, documentId } from "firebase/firestore";
import { Formik } from "formik"
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.error('There is no stock available for some of the selected products, sorry!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
}

const schema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Minimum 3 characters').max(25, 'Maximum 25 characters').required('This input field is required'),
    lastName: Yup.string().min(3, 'Minimum 3 characters').max(25, 'Maximum 25 characters').required('This input field is required'),
    phone: Yup.string().min(7, 'Minimum 7 numbers').max(12, 'Maximum 12 numbers').required('This input field is required'),
    address: Yup.string().min(8, 'Minimum 8 characters').max(40, 'Maximum 40 characters').required('This input field is required'),
    email: Yup.string().email('Invalid email').required('This input field is required'),
    confirmEmail: Yup.string().oneOf([Yup.ref('email'), null], "Emails don't match").required('This input field is required')
})

export const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {
        const order = {
            buyer: values,
            items: cart,
            price: totalPrice()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "products")
        const itemsRef = query(productsRef, where( documentId(), 'in', cart.map(prod => prod.id) ))

        const outOfStock = []

        const products = await getDocs(itemsRef)
        products.docs.forEach( doc => {
            const item = cart.find(item => item.id === doc.id)
            if(doc.data().stock >= item.amount){
                batch.update( doc.ref, { stock: doc.data().stock - item.amount } )
            }else{
                outOfStock.push(item)
            }
        } )

        if(outOfStock.length === 0){
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, order)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptyCart()
                        })
                        .catch((err) => console.log(err))
                })
        }else{
            {notify()}
        }
    }

    if(orderId){
        return (
            <div className="container mx-auto" style={{minHeight: "900px"}}>
                <h2 className="mb-2 inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Your purchase has been entered successfully</h2>
                <hr />
                <p className="my-4 text-xl">Your order code is <b>{orderId}</b>, thanks for shopping at Zeta!</p>
                <Link to="/" className="rounded-lg text-center px-5 py-2.5 border-2 border-transparent block w-40 font-bold text-white bg-darkBgColor hover:border-primaryColor focus:outline-none">Back</Link>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/" />
    }

    return (
        <div className="container mx-auto" style={{minHeight: "900px"}}>   
            <h2 className="mb-2 inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">Finishing your purchase</h2>
            <hr />
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    phone: '',
                    address: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            placeholder="Your first name"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        />
                        {errors.firstName && <p className="text-red-500 font-bold">{errors.firstName}</p>}

                        <input
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            placeholder="Your last name"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        />
                        {errors.lastName && <p className="text-red-500 font-bold">{errors.lastName}</p>}

                        <input
                            onChange={handleChange}
                            type="number"
                            name="phone"
                            value={values.phone}
                            placeholder="Your phone number"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-b-primaryColor"
                        />
                        {errors.phone && <p className="text-red-500 font-bold">{errors.phone}</p>}

                        <input
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={values.address}
                            placeholder="Your address"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        />
                        {errors.address && <p className="text-red-500 font-bold">{errors.address}</p>}

                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Your email"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        />
                        {errors.email && <p className="text-red-500 font-bold">{errors.email}</p>}

                        <input
                            onChange={handleChange}
                            type="email"
                            name="confirmEmail"
                            placeholder="Confirm your email"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                        />
                        {errors.confirmEmail && <p className="text-red-500 font-bold">{errors.confirmEmail}</p>}

                    </div>
                    <div className="flex justify-between items-center">
                        <button type="button" className="block w-40 text-white bg-darkBgColor hover:border-primaryColor" onClick={handleBack}>Back</button>
                        <button type="submit" className="mt-5 block w-40 font-bold text-white bg-green-600 hover:border-green-200 active:bg-green-800 focus:outline-none">Send</button>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable={false}
                        pauseOnHover
                        theme="colored"
                    />
                </form>
                )}
            </Formik>
        </div>
    )
}