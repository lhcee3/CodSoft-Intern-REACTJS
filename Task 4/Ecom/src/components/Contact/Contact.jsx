import { HiGlobeAmericas, HiMapPin, HiPhone, HiFingerPrint } from "react-icons/hi2";
import { useState } from "react"

export const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit:', values);
    }

    return (
        <div className="relative min-h-screen">
            <img
                className="w-full h-96 object-cover object-center mt-20 z-0"
                src="https://images.pexels.com/photos/1009922/pexels-photo-1009922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dog banner image"
            />
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col rounded-2xl bg-white absolute p-7 px-12 shadow-2xl mt-24">
                    <div className="flex justify-around gap-12">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiGlobeAmericas className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">India</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiMapPin className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">Delhi</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiPhone className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">+91 99999999</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <HiFingerPrint className="text-primaryColor drop-shadow-lg shadow-primaryColor text-8xl"/>
                            <p className="text-xl font-semibold">Tax ID: 273 384</p>
                        </div>
                    </div>
                    <form className="flex flex-col gap-5 justify-around mt-12" onSubmit={handleSubmit}>
                        <input
                            required
                            type="text"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                            placeholder="Name"
                            value={values.name}
                            name='name'
                            onChange={handleInputChange}
                        />
                        <input
                            required
                            type="email"
                            className="text-lg border-2 border-slate-300 rounded p-3 focus:outline-none focus:border-primaryColor"
                            placeholder="Email"
                            value={values.email}
                            name='email'
                            onChange={handleInputChange}
                        />
                        <textarea
                            required
                            className="text-lg border-2 border-slate-300 rounded p-3 resize-none focus:outline-none focus:border-2 focus:border-primaryColor"
                            placeholder="Message"
                            value={values.message}
                            name='message'
                            onChange={handleInputChange}>
                        </textarea>
                        <p className="text-center">Our representative will get back to you within 24 hours.</p>
                        <input type="submit" value="Send" className="text-lg border-2 bg-primaryColor text-white border-slate-300 rounded p-3 focus:outline-none active:border-primaryColor active:brightness-75 cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    )
}