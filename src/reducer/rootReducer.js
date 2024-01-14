

const initState = {
  productList: [],
  filters: {
    searchText : '',
    recommended: 'All',
    price: '0,0',
    color: 'All',
    category: 'All'
  }
}

const rootReducer = ( state = initState, action) => {
  switch(action.type){
    case '': {
      return{

      }
    }
    default: {
      return state;
    }

  }
}
export default rootReducer