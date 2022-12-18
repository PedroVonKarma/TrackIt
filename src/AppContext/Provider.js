import AppContext from "./Context";
import React from "react";
import { useState } from "react";
export default function AppProvider({children}){
    const [tok, setTok] = useState('')
    const [im, setIm] = useState('')
    const [save, setSave] = useState('')
    const [reloadV, setReloadV] = useState(0)
    const [nomeH, setNomeH] = useState('')
    const [dias, setDias] = useState([])
    const [hojeFeitos, setHojeFeitos] = useState([])
    const [hojeTotal, setHojeTotal] = useState(0)
    const obj = {
        token: tok,
        image: im
    }
    const config = {
        headers: {
            "Authorization": `Bearer ${tok}`
        }
    }
    
    return (
        <AppContext.Provider value={{obj, setTok, setIm, setSave, save, config, reloadV, setReloadV, nomeH, setNomeH, dias, setDias, hojeFeitos, setHojeFeitos, hojeTotal, setHojeTotal}}>
            {children}
        </AppContext.Provider>
    )
}