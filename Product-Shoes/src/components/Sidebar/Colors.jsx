import { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";
import { setSearchColor } from "../../reducer/actions";

const Colors = () => {
  const colors = ["All", "Black", "Blue", "Red", "Green", "White"];

  const { state, dispatch } = useContext(ShoeContext)
  return (
    <div>
      <h3 className="d-flex flex-start fs-4 fw-normal">Colors</h3>
      <div className="form-group">
        {colors.map((color, index) => (
          <div key={color} className="form-check py-1">
            <input
              id={`color_${index}`}
              className="form-check-input"
              type="radio"
              name="color"
              value={color}
              defaultChecked={color === 'All'}
              style={
                color !== 'All' && color !== 'White'
                  ? { backgroundColor: color }
                  : color === 'All'
                  ? { backgroundImage: 'linear-gradient(to right, red, green)' }
                  : { backgroundColor: '' }
              }
              onChange={(e) => dispatch(setSearchColor(e.target.value))}
            />
            <label
              htmlFor={`color_${index}`}
              className={`form-check-label ${
                color === state?.filters?.color ? 'text-decoration-underline fw-bolder' : ''
              }`}
            >
              {color}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
