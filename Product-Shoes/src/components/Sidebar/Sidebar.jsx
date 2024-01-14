import Category from './Category'
import Colors from './Colors'
import Price from './Price'
const Sidebar = () => {
  return (
    <div className="sidebar vh-100 d-flex flex-column align-items-start ">
       <div className="sidebar-content">
        <img className="sidebar-img" src="https://www.vectorkhazana.com/assets/images/products/Nike_Shoes_Drip.png" alt="shoe avatar" />
        <span className="brand-name">Shoe Ecommerce</span>
      </div>
      <div className="my-3">
       <Category />
       <Price />
       <Colors />
      </div>
    </div>
  )
}
export default Sidebar