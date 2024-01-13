/* 
  1.initState: là 1 obj
  2.actions: obj hoặc action creator tạo ra 1 obj
    {
      type: 'ten action'
      paload: dữ liệu
    }
  3.reducer: là 1 hàm, có 2 tham số. Tham số thứ 1 là state và tham số 2 là actions
  4.dispatch: là 1 hàm, nhận vào action và truyền action tới reducer
  */
export const initState = {
  // lưu trữ mảng các sản phẩm
  productList: [
    // {
    //   "img": "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    //   "title": "Nike Air Monarch IV",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Nike",
    //   "color": "White",
    //   "category": "Sneakers",
    //   "id": 1
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    //   "title": "Nike Air Vapormax Plus",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Nike",
    //   "color": "Red",
    //   "category": "Sneakers",
    //   "id": 2
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    //   "title": "Nike Waffle One Sneaker",
    //   "star": 5,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Nike",
    //   "color": "Green",
    //   "category": "Sneakers",
    //   "id": 3
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    //   "title": "Nike Running Shoe",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Adidas",
    //   "color": "Black",
    //   "category": "Sneakers",
    //   "id": 4
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    //   "title": "Flat Slip On Pumps",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Vans",
    //   "color": "Green",
    //   "category": "Flats",
    //   "id": 5
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    //   "title": "Knit Ballet Flat",
    //   "star": 5,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "150",
    //   "company": "Adidas",
    //   "color": "Black",
    //   "category": "Flats",
    //   "id": 6
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    //   "title": "Loafer Flats",
    //   "star": 5,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "150",
    //   "company": "Vans",
    //   "color": "White",
    //   "category": "Flats",
    //   "id": 7
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    //   "title": "Nike Zoom Freak",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Nike",
    //   "color": "Green",
    //   "category": "Sneakers",
    //   "id": 8
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    //   "title": "Nike Men's Sneaker",
    //   "star": 5,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "200",
    //   "company": "Adidas",
    //   "color": "Blue",
    //   "category": "Sneakers",
    //   "id": 9
    // },
    // {
    //   "img": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    //   "title": "PUMA BLACK-OCE",
    //   "star": 4,
    //   "reviews": 123,
    //   "prevPrice": "140",
    //   "newPrice": "150",
    //   "company": "Puma",
    //   "color": "Green",
    //   "category": "Sneakers",
    //   "id": 10
    // },
  ],
  filters: {
    searchText: ' ',
    recommended: 'All',
    category: 'All',
    price: '0,0',
    color: 'All'
  }
  
}

const reducer = (state, action) => {
  switch (action.type){
    case 'productList/fetchData':
      return {
        ...state,
        productList: action.payload
      }
    break;
    case 'filters/searchText':
        return {
          ...state,
          filters: {
            ...state.filters,
            searchText: action.payload
          }
        }
      break;
    case 'filters/searchRecommended': 
      return {
          ...state,
          filters: {
            ...state.filters,
            recommended: action.payload
          }
      }
      case 'filters/searchCategory':
        return {
          ...state,
          filters: {
            ...state.filters,
            category: action.payload
          }
        }
        case 'filters/searchColor':
        return {
          ...state,
          filters: {
            ...state.filters,
            color: action.payload
          }
        }
        case 'filters/searchPrice':
          return {
            ...state,
            filters: {
              ...state.filters,
              price: action.payload
            }
          }
      default:
      break;  
  }
}
export default reducer