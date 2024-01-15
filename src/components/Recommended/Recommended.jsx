import React from "react";
import Button from 'react-bootstrap/Button';
const recommended = [
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
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Recommended</h5>
            <div className="form-group">
                {
                    recommended.map(recmd => (
                        <Button key={recmd.value}
                        variant="outline-dark mx-1"
                            className={
                                `${recmd.value === 'All' ? 'active' : ''}`
                            }
                            type="button"
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