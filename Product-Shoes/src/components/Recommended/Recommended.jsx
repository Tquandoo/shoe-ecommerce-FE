import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ShoeContext } from '../context/ShoeContext';
import { setSearchRecommended } from '../../reducer/actions';

const listRecommended = [
  {
    value: 'All',
    name: 'All Products',
  },
  {
    value: 'Nike',
    name: 'Nike',
  },
  {
    value: 'Adidas',
    name: 'Adidas',
  },
  {
    value: 'Puma',
    name: 'Puma',
  },
  {
    value: 'Vans',
    name: 'Vans',
  },

]
const Recommended = () => {
  const {state, dispatch} = useContext(ShoeContext)

  return (
    <div className="d-flex flex-column align-items-start">
      <h5>Recommended</h5>
      <div>
        {
          listRecommended.map(rcm => (
            <Button key={rcm.value} 
              variant="outline-dark mx-1"
              className=  {
                `${rcm.value == state?.filters?.recommended ? 'active': ''}`
              }
              onClick={() => dispatch(setSearchRecommended(rcm.value))}
            >
              {rcm.name}
            </Button>
          ))
        }
        {/* <Button variant="outline-dark active">All Products</Button>
        <Button variant="outline-dark mx-2">Nike</Button>
        <Button variant="outline-dark ">Adidas</Button>
        <Button variant="outline-dark mx-2">Puma</Button>
        <Button variant="outline-dark ">Vans</Button> */}
      </div>
    </div>
  );
};

export default Recommended;
