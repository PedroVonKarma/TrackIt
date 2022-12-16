import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function Hoje(){
    const {obj} = useContext(AppContext)
    return (
        <>
        {obj.token}
        <img src={obj.image} alt='a'/>
        </>
    )
}