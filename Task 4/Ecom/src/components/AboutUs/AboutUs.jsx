export const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <h2 className="inline-block text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-300 to-purple-900 leading-tight">About us</h2>
            <hr />
            <div className="mt-3 text-lg">
                <p className="text-justify"><strong>Zeta</strong> emerged in 2023 as a family business, specialized in the import and sale of pet supplies items.</p>
                <p className="mt-4 text-justify">Over time, following the needs of our customers and the market, we gradually incorporated new and varied lines of products, until today we became a leading company in the market, at <strong>Zeta</strong> you can find everything you are looking for for your pet's consumption and at the best prices!</p>
                <p className="mt-4 text-justify">We invite you to visit our website and browse the items we have in stock! With just a few clicks you can make your purchase and we will send the product you have selected to your home.</p>
                <p className="mt-4 text-justify">You can also visit us at our store, located in the downtown area of the city for your convenience, you will be attended with the warmth and professionalism that has always characterized us.</p>
            </div>
            <div className="mt-6">
                <img
                    className="w-full object-cover rounded-md"
                    style={{height: "30rem"}}
                    src="https://www.americanhumane.org/app/uploads/2016/08/shutterstock_162633491.jpg"
                    alt="Banner image"
                />
            </div>
        </div>
    )
}