import { createContext, useState } from "react";


const Content = createContext();
function Provider ({children}) {
  const [orderFoods, setOrderFoods] = useState([]);
  return (
    <Content.Provider value={{orderFoods, setOrderFoods}}>
      {children}
    </Content.Provider>
  )
}

export {Content, Provider};