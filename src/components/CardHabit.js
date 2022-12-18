import styled from "styled-components";
import lixo from '../assets/lixo.png'
import axios from "axios";
import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function CardHabit(props){
    const dias = props.days
    const {config} = useContext(AppContext)
    const {setReloadV} = useContext(AppContext)
    const {reloadV} = useContext(AppContext)
    function deletar(){
        if(window.confirm('Tem certeza que deseja deletar o hábito?')){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`, config)
        promise.then(success)
        promise.catch((e) => console.log(e.response.data.message))}
    }
    function success(){
        setReloadV(reloadV +1)
    }
    return(
        <Card data-test="habit-container"><p data-test="habit-name">{props.name}</p>
            <div>
            <Dia data-test="habit-day" clicado={dias.includes(0)}>D</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(1)}>S</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(2)}>T</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(3)}>Q</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(4)}>Q</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(5)}>S</Dia>
            <Dia data-test="habit-day" clicado={dias.includes(6)}>S</Dia>
            </div>
        <img data-test="habit-delete-btn" onClick={deletar} src={lixo} alt='excluir'/>
        </Card>
    )
}

const Card = styled.div`
width: 100%;
height: 90px;
background: #FFFFFF;
border-radius: 5px;
padding: 13px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-block: 10px;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
margin-top: 0;
}
div{display:flex;
    margin-block: 3px;
}
img{
    width: 13px;
    position: absolute;
    right: 7.47%;
}
`
const Dia = styled.button`
width: 30px;
height: 30px;
background: ${props => props.clicado ? '#CFCFCF' : '#FFFFFF'};
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-inline: 2px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: ${props => props.clicado ? '#FFFFFF' : '#DBDBDB'};
margin-block:5px;
`