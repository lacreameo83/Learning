import React, { useState, createContext } from 'react'

export const Globalcontext = createContext(null)



// funtion
export const Globalcontextprovider =({children}) =>{
  const [count,setcount] =useState(0);
  return(
    <Globalcontext.Provider value={{count,setcount}}>
     {children}
    </Globalcontext.Provider>
  )
}
