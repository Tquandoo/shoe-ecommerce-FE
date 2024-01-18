import { createSelector } from "@reduxjs/toolkit"

export const productListSelector = (state) => state.productList.products
export const productListStateSelector = (state) => state.productList.status
export const recommendedSelector = (state) => state.filters.recommended
export const colorSelector = (state) => state.filters.color
export const priceSelector = (state) => state.filters.price
export const categorySelector = (state) => state.filters.category
export const searchTextSelector = (state) => state.filters.searchText

export const remainProducts = createSelector(
  // viết theo thứ tứ thứ nó trả về sẽ là tham số ở hàm dưới
  productListSelector,
  searchTextSelector,
  colorSelector,
  categorySelector,
  recommendedSelector,
  priceSelector,
  (productList, searchText, color, category, recommended, price) => {
    let filtersProduct = [...productList]
    if(searchText){
        filtersProduct = filtersProduct.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()) )
    }
    if(color !== 'All'){
        filtersProduct = filtersProduct.filter((p) => p.color.toLowerCase() === color.toLowerCase())
    }
    if(category !== 'All'){
        filtersProduct = filtersProduct.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    }
    if(recommended !== 'All'){
        filtersProduct = filtersProduct.filter((p) => p.company.toLowerCase() === recommended.toLowerCase())
    }
    if(price !== '0,0'){
        const [min, max] = price.split(',')
        if(min !== max){
            filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) && p.newPrice <= Number(max))
        }
        else{
            filtersProduct = filtersProduct.filter((p) => p.newPrice > Number(min) )
        }
    }
    return filtersProduct
  }
)
