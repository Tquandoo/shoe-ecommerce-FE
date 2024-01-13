import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import Products from "../components/Products/Products"
import Recommended from "../components/Recommended/Recommended"

const MainLayouts = ({ children }) => {
  return (
    <div className="container d-flex">
        <Sidebar />
        <div className="d-flex flex-column flex-grow-1 mx-4">
          <Navbar />
          <hr className="my-2" />
          <Recommended />
          {children}
        </div>
      </div>
  )
}

export default MainLayouts
