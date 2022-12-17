import { useContext } from "react";
import AppContext from "../AppContext/Context";
import Header from "./Header";
import { createGlobalStyle } from 'styled-components'
import Menu from "./Menu";
export default function Hoje(){
    const {obj} = useContext(AppContext)
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Menu/>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`