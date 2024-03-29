import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { remainProducts } from "../../redux-toolkit/selectors";
import productsSlice, { fetchProductThunkAction } from "../../slices/productsSlice";

const Products =  () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductThunkAction())
    },[])
    const remainProductList =  useSelector(remainProducts)
    // const productList = useSelector((state) => state.productList)
    // const {searchText, price, category, color, recommended} = useSelector((state) => state.filters)
    // console.log('productList', productList);
    // const queryProducts = () => {
    //     let filtersProduct = [...productList]
    //     if(searchText){
    //         filtersProduct = filtersProduct.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()) )
    //     }
    //     if(color !== 'All'){
    //         filtersProduct = filtersProduct.filter((p) => p.color.toLowerCase() === color.toLowerCase())
    //     }
    //     if(category !== 'All'){
    //         filtersProduct = filtersProduct.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    //     }
    //     if(recommended !== 'All'){
    //         filtersProduct = filtersProduct.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
    //     }
    //     if(price !== '0,0'){
    //         const [min, max] = price.split(',')
    //         if(min !== max){
    //             filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
    //         }
    //         else{
    //             filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) )
    //         }
    //     }
    //     return filtersProduct
    // }
    // const remainProductList = queryProducts()
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Products</h5>
            <div className="row">
                {
                    remainProductList?.map(product => (
                        <Product product={product} key={product.id}/>
                    ))
                }
              
            </div>
        </div>
    )
}

export default Products;