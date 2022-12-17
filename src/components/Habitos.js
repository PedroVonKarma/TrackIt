import Header from "./Header"
import Menu from "./Menu"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import CardSave from "./CardSave"
export default function Habitos(){
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <Cont>
            <Create><h1>Meus hábitos</h1><button>+</button></Create>
            <CardSave/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Cont>
        <Menu/>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
const Cont = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
width:100%;
padding-inline:17px;
*{margin-block:10px;}
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
}
`
const Create = styled.div`
width:100%;
display: flex;
justify-content: space-between;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
button{
    width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 27px;
line-height: 35px;
color: #FFFFFF;
padding: 0px;
}
`