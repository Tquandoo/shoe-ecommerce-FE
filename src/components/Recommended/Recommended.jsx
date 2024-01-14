import React from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { setSearchRecommended } from "../../reducer/actions";

const recommendedList = [
    {
        value: 'All',
        name: 'All Products'
    },
    {
        value: 'Nike',
        name: 'Nike'
    },
    {
        value: 'Adidas',
        name: 'Adidas'
    },
    {
        value: 'Puma',
        name: 'Puma'
    },
    {
        value: 'Vans',
        name: 'Vans'
    }
]
function Recommended() {
    const dispatch = useDispatch()
    const recommended = useSelector((state) => state.filters.recommended)
    return (
        <div className="ms-2 py-3 d-flex flex-column align-items-start">
            <h5>Recommended</h5>
            <div >
                {
                    recommendedList.map(recmd => (
                        <Button  key={recmd.value}
                            variant="outline-dark mx-1"
                            className={
                                `${recmd.value === recommended ? 'active' : ''}`
                            }
                            onClick={() => dispatch(setSearchRecommended(recmd.value))}
                        >
                            {recmd.name}
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

export default Recommended;