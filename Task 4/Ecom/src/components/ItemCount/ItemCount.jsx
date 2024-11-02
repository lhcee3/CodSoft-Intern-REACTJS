export const ItemCount = ({amount, setAmount, max, onAdd}) => {
    const handleSubtract = () => {
        amount > 1 && setAmount(amount - 1)
    }
    
    const handleAdd = () => {
        amount < max && setAmount(amount + 1)
    }

    return (
        <div className="mt-3 flex items-center gap-5">
            <div>
                <p className="absolute -mt-6 text-sm">Select how many products you want</p>
                <div className="flex items-center gap-5">
                <button
                    onClick={handleSubtract}
                    className={`block w-20 font-bold bg-red-500 focus:outline-none text-white Rs {amount === 1 ? 'hover:border-transparent' : 'hover:border-red-200 active:bg-red-800'}`}
                    disabled={amount === 1}>{amount === 1 ? "MIN" : '-'}
                </button>
                <p className="font-bold text-xl block w-5 text-center">{amount}</p>
                <button
                    onClick={handleAdd}
                    className={`block w-20 font-bold text-white bg-green-600 focus:outline-none Rs {amount === max ? 'hover:border-transparent' : 'hover:border-green-200 active:bg-green-800'}`}
                    disabled={amount === max}>{amount === max ? "MAX" : '+'}
                </button>
                </div>
            </div>
            <button onClick={onAdd} className="block w-60 text-white bg-primaryColor hover:border-violet-200 active:bg-violet-800 focus:outline-none">Add to cart</button>
        </div>
    )
}