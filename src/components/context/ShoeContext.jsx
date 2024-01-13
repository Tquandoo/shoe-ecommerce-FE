
import { createContext, useReducer } from "react";
import reducer, { initState } from "../../reducer/reducer";

export const ShoeContext = createContext();

const ShoeProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)
    return (
      <ShoeContext.Provider value = {{ state, dispatch }}>
          {children}
      </ShoeContext.Provider>
    ) 
}
export default ShoeProvider