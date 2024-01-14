import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchColor } from "../../reducer/actions";

const colors = [
    "All", "Black", "Blue", "Red", "Green", 'White'
]
function Colors() {
    const currentcolor = useSelector((state) => state.filters.color)
    const dispatch = useDispatch()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
           <h3 className="d-flex flex-start fs-4 fw-normal">Colors</h3>
            <div className="form-group">
                {
                    colors.map((color,index) => (
                        <div key={color} className="form-check py-1">
                            <input className="form-check-input" type="radio" name="color"
                                id={`color_${index}`}
                                value={color}
                                defaultChecked={color === 'All'}
                                style={color === 'All' ? { backgroundImage: 'linear-gradient(to right, red, green)' } : color !== 'White' ? { backgroundColor: color } : {}}
                                onChange={(e) => dispatch(setSearchColor(e.target.value))}
                            />
                            <label 
                                className={`form-check-label ${color === currentcolor ? 'text-decoration-underline fw-bolder' : ''}`}
                                role="button"
                                htmlFor={`color_${index}`}
                            >
                                {color}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Colors;