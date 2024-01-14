import { IoIosCart } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { ShoeContext } from '../context/ShoeContext';
import { setSearchText } from '../../reducer/actions';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const { state, dispatch } = useContext(ShoeContext);

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='search-container'>
          <input
            className='search '
            type='text'
            placeholder='Enter your search shose...'
            value={state?.filters?.searchText || ''}
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
  );
};

export default Navbar;
