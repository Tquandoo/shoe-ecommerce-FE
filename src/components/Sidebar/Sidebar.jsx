import Category from './Category'
import Colors from './Colors'
import Price from './Price'
const Sidebar = () => {
  return (
    <div className="me-4 sidebar vh-80 d-flex flex-column align-items-center">
       <div className="sidebar-content">
        <img className="sidebar-img" src="https://www.vectorkhazana.com/assets/images/products/Nike_Shoes_Drip.png" alt="shoe avatar" />
        <span className="brand-name">Shoe Ecommerce</span>
      </div>
      <div className="my-3 d-flex flex-column justify-content-center align-items-center">
        <Category />
        <Price />
        <Colors />
      </div>
    </div>
  )
}
export default Sidebar