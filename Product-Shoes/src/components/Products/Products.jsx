import React, { useContext, useEffect } from 'react';
import Product from './Product';
import { ShoeContext } from '../context/ShoeContext';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { getProductList } from '../../reducer/actions';
import { useSelector } from 'react-redux';

/* 
    1.store
    2.rootReducer
      2.1. reducer
      2.2. reducer
    3. actions (action creator)
    4. dispatch => useDispatch
    5. useSelect => lấy các dữ liệu riêng biệt trong state(data)
*/
const Products = () => {

  const state = useSelector((state) => state)
  console.log('state', state);
  // const {state, dispatch } = useContext(ShoeContext)
  // const { productList, filters: { searchText, recommended, category, color, price } } = state

  useEffect(() => {
      const fetchProductList = async () => {
          let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
          let data = await productListRes.json()
          dispatch(getProductList(data))
        }
      fetchProductList()
  },[])
  const queryProduct = () => {
    let filterProductList = [...productList]
    if(searchText){
      filterProductList = filterProductList.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
    }
    if(recommended !== 'All'){
      filterProductList = filterProductList.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
    }
    if(category !== 'All'){
      filterProductList = filterProductList.filter((p) => p.category === category)
    } 
    if (color !== 'All') {
      filterProductList = filterProductList.filter((p) => p.color === color);
    }
    if (price !== '0,0'){
      const [ min, max ] = price.split(',')
      if( min != max){
       filterProductList  = filterProductList.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
      }
      else{
        filterProductList  = filterProductList.filter((p) => p.newPrice > Number(min))
      }
    }
    return filterProductList
  }
  const remainProductList = queryProduct()
  return (
    <div className="d-flex flex-column justify-content-center my-3">
      <h5 className='text-start'>Products</h5>
      <div className="d-flex flex-wrap row">
        {
          remainProductList?.map(product => (
              <Product key={product.id} product={product}/>
          ))
        }
      </div>
    </div>
  );
};

export default Products;