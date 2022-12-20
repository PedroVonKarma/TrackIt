import styled from "styled-components"
import { useState } from "react"
import { useContext } from "react";
import AppContext from "../AppContext/Context";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
export default function CardSave(){
    const [loading, setLoading] = useState(false)
    const {setSave} = useContext(AppContext)
    const {config} = useContext(AppContext)
    const {nomeH} = useContext(AppContext)
    const {setNomeH} = useContext(AppContext)
    const {dias} = useContext(AppContext)
    const {setDias} = useContext(AppContext)
    const {setReloadV} = useContext(AppContext)
    const {reloadV} = useContext(AppContext)
    function salvarDia(i){
        if(dias.includes(i)){
            const rer = dias.filter(j => j!==i)
            setDias(rer)
        } else{
            setDias([...dias, i])
        }
    }
    function cancel(){
        setSave('')
    }
    function succes(){
        setSave('')
        setLoading(false)
        setReloadV(reloadV+1)
        setNomeH('')
        setDias([])
    }
    function fail(e){
        setLoading(false)
        alert(e.response.data.message)
    }
    function salvarHabito(){
        if(nomeH === ''){
            alert('Escreva o nome do hábito')
            return
        }
        if(dias.length === 0){
            alert('Selecione pelo menos 1 dia')
            return
        }
        setLoading(true)
        const obj = {
            name: nomeH,
            days: dias 
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', obj, config)
        promise.then(succes)
        promise.catch(fail)
    }
    return(
    <Card data-test="habit-create-container">
        <Div1>
            <input data-test="habit-name-input" disabled={loading} type='text' value={nomeH} onChange={(e) => setNomeH(e.target.value)} placeholder='nome do hábito'/>
            <div>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(0)} onClick={() => salvarDia(0)}>D</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(1)} onClick={() => salvarDia(1)}>S</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(2)} onClick={() => salvarDia(2)}>T</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(3)} onClick={() => salvarDia(3)}>Q</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(4)} onClick={() => salvarDia(4)}>Q</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(5)} onClick={() => salvarDia(5)}>S</Dia>
                <Dia data-test="habit-day" disabled={loading} clicado={dias.includes(6)} onClick={() => salvarDia(6)}>S</Dia>
            </div>
        </Div1>
        <Div2>
            <p data-test="habit-create-cancel-btn" disabled={loading} onClick={cancel}>Cancelar</p><button data-test="habit-create-save-btn" disabled={loading} onClick={salvarHabito}>{loading ? <ThreeDots height='12px' color='#ffffff'/> : 'Salvar'}</button>
        </Div2>
    </Card>
    )
}

const Card = styled.div`
width: 100%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
padding: 18px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-block: 10px;
`
const Div1 = styled.div`
margin: 0;
input{
width: 95%;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
padding-left: 10px;
margin:0;
}
input:disabled{
    background: #F2F2F2;
    color: #B3B3B3;
}
input::placeholder{
color: #DBDBDB;
}
div{display:flex;
    margin-block: 3px;
}
`
const Div2 = styled.div`
display: flex;
justify-content: end;
align-items: center;
margin: 0;
p{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;}
button{
    margin-left: 23px;
    width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
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