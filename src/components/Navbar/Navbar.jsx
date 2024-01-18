import React from "react";
import { FaCartPlus, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { searchTextSelector } from "../../redux-toolkit/selectors";
function Navbar() {
    const searchText = useSelector(searchTextSelector)
    const dispatch = useDispatch()
    return (
        <div className="container d-flex align-items-center border-bottom py-2">
             <div className="sidebar-content ">
                <Link to={"/"} className="brand">
                    <div className="d-flex flex-column align-items-center">
                        <img className="sidebar-img" src="https://www.vectorkhazana.com/assets/images/products/Nike_Shoes_Drip.png" alt="shoe avatar" />
                        <span className="brand-name">Shoe Ecommerce</span>
                    </div>
                </Link>
            </div>
            {/* <div className="d-flex align-items-center" style={{ minWidth: "180px" }}>
                <Link to={"/"} className="logo">
                    <FaCartPlus size={22} className="me-2" /> Shoe Ecommerce
                </Link>
            </div> */}
            <div className="ms-4 d-flex flex-grow-1 justify-content-between">
                <form className="search-container">
                <input
                    value={searchText}
                    className='search '
                    type='text'
                    placeholder='Enter your search shose...'
                    onInput={(e) => dispatch(filtersSlice.actions.setSearchText(e.target.value))}
                />
                   <CiSearch className='search-icon text-secondary' size={20}/>
                </form>
                <div className="">
                    <Link to={'/cart'}>
                        <FaShoppingCart size={22} className="me-2" role="button" />
                    </Link>
                    <FaUser size={22} role="button" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;