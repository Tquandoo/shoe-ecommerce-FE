import React from "react";
import { IoIosCart } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { setSearchText } from "../../reducer/actions";
import { CiSearch } from 'react-icons/ci';
function Navbar() {
    const dispatch = useDispatch()
    return (
      <>
      <div className='ms-2 d-flex justify-content-between align-items-center  border-bottom py-2'>
        <div className='search-container'>
          <input
            className='search '
            type='text'
            placeholder='Enter your search shose...'
            onInput={(e) => dispatch(setSearchText(e.target.value))}
          />
            <CiSearch className='search-icon text-secondary' size={20}/>
        </div>
        <div className='icon-container'>
          <IoIosCart className='mx-2' size={25} role='button' />
          <FaUser size={20} role='button' />
        </div>
      </div>
    </>
    )
}

export default Navbar;