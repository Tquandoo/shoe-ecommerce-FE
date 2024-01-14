import { useContext } from "react"
import { ShoeContext } from "../context/ShoeContext"
import { setSearchCategory } from "../../reducer/actions"

const Category = () => {

const categories = [
  "All", "Sneakers", "Flats", "Sandals", "Heels"
]

const  {state ,dispatch} = useContext(ShoeContext)

  
  return (
    <div className="py-2 d-flex flex-column justify-content-center">
      <h3 className="d-flex flex-start fs-4 fw-normal">Category</h3>
        <div className="form-group">
          {
            categories.map((category, index) => (
              <div key={category} className="form-check py-1">
                <input className="form-check-input" type="radio" name="category" 
                  id={`category_${index}`}
                  value = {category}
                  defaultChecked={category === 'All'}
                  onChange={(e) => dispatch(setSearchCategory(e.target.value))}
                />
                <label   htmlFor={`category_${index}`} className={`form-check-label ${category=== state?.filters?.category ? 'text-decoration-underline fw-bolder ': ''}`}>
                  {category}
                </label>
              </div>
            ))
          }
        </div>
    </div>
  )
}
export default Category