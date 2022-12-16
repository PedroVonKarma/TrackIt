import AppContext from "./Context";
import React from "react";
import { useState } from "react";
export default function AppProvider({children}){
    const [tok, setTok] = useState('')
    const [im, setIm] = useState('')
    const obj = {
        token: tok,
        image: im
    }
    return (
        <AppContext.Provider value={{obj, setTok, setIm}}>
            {children}
        </AppContext.Provider>
    )
}