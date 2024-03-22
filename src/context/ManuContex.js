import { createContext, useContext, useState } from "react";

export const ManuContext = createContext(
    {
        pButton: Boolean,
        ShowPButton:() =>{}
    }
)

export const ManuProvider = ({children}) =>{
    const [pButton,setPBbutton] =useState(false)
     const ShowPButton = () => {
        setPBbutton(!pButton)
     }
     //setPBbutton(false)
     return(
        <ManuContext.Provider value={{pButton,ShowPButton}}>
            {children}
        </ManuContext.Provider>
     )
}


export const UseManuContext = () =>{
    return useContext(ManuContext)
}