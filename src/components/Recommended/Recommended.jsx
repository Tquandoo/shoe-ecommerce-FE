import React from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "../../slices/filtersSlice";
import { recommendedSelector } from "../../redux-toolkit/selectors";
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
    const recommended = useSelector(recommendedSelector)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommendedList.map(recmd => (
                        <Button key={recmd.value}
                        variant="outline-dark mx-1"
                            className={
                                `${recmd.value === recommended ? 'active' : ''}`
                            }
                            type="button"
                            onClick={() => dispatch(filtersSlice.actions.setSearchRecommended(recmd.value))}
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