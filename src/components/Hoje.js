import { useContext, useState } from "react";
import AppContext from "../AppContext/Context";
import Header from "./Header";
import styled, { createGlobalStyle } from 'styled-components'
import Menu from "./Menu";
import Day from "./Day";
import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
export default function Hoje() {
  const [dayHabits, setDayHabits] = useState([])
  const { config } = useContext(AppContext)
  useEffect(() => {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
    promise.then((e) => setDayHabits(e.data))
    promise.catch((e) => alert(e.response.data.message))
  }, [])
  console.log(dayHabits)
  if (dayHabits.length === 0) {
    return (<>
      <GlobalStyle />
      <Header />
      <Data>{Day}</Data>
      <Stats>Nenhum hábito encontrado</Stats>
      <Menu />
    </>)
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Data>{Day}</Data>
      <Stats>Nenhum hábito concluído ainda</Stats>
      {dayHabits.map((i) => <Card key={i.id} id={i.id} name={i.name} done={i.done} atual={i.currentSequence} high={i.highestSequence} />)}
      <Menu />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #F2F2F2;
  }
`
const Data = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-top: 100px;
margin-left: 17px;
margin-bottom: 3px;
`
const Stats = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
margin-left: 17px;
margin-bottom: 23px;
`