import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"

export const SearchBox = () => {

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState(null)

    const handleOnChange = (e) => { // when search box value changes
        setSearchValue(e.target.value)
    }

    const handleSearch = (e) => { // when search form is submited
        e.preventDefault()
        navigate(`products/search/Rs {searchValue}`)
    }

    return(
        <div className="hidden lg:block">
            <form className="flex items-center" onSubmit={handleSearch}>
                <input
                    id="searchBox"
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Search a product..."
                    className="h-10 focus:outline-none p-2 rounded-l-lg"
                />
                <BsSearch onClick={handleSearch} className="active:brightness-75 h-10 w-10 p-2 rounded-r-lg cursor-pointer text-white bg-primaryColor"/>
            </form>
        </div>
    )
}