import styled from "styled-components"
import check from '../assets/check.png'
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"
import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function Card(props){
    const [loading, setLoading] = useState(false)
    const {config} = useContext(AppContext)
    const {setReloadH} = useContext(AppContext)
    const {reloadH} = useContext(AppContext)
    const {setHojeFeitos} = useContext(AppContext)
    const {hojeFeitos} = useContext(AppContext)
    if(props.done && !hojeFeitos.includes(props.id)){
        setHojeFeitos([...hojeFeitos, props.id])
    }
    if(!props.done && hojeFeitos.includes(props.id)){
        const rer = hojeFeitos.filter(j => j!==props.id)
         setHojeFeitos(rer)
    }
    function succes(){
        setLoading(false)
        setReloadH(reloadH+1)
    }
    function fail(e){
        setLoading(false)
        console.log(e.response.data.message)
    }
    function tickar(id){
        setLoading(true)
        if(props.done){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
            promise.then(succes)
            promise.catch(fail)
        } else{
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
            promise.then(succes)
            promise.catch(fail)
        }
    }
    return(<Cart data-test="today-habit-container">
        <Div1>
            <h1 data-test="today-habit-name">{props.name}</h1>
            <p>Sequência atual: <Atual data-test="today-habit-sequence" cor={props.done}>{props.atual} dias</Atual> <br/> Seu recorde: <Record data-test="today-habit-record" cor={props.atual===props.high && props.high!==0}>{props.high} dias</Record></p>
            
        </Div1>
        <CheckBt data-test="today-habit-check-btn" onClick={() => tickar(props.id)}feito={props.done}>{loading ? <ThreeDots height='15px' color='#ffffff'/> : <img src={check} alt='check'/>}</CheckBt>
    </Cart>)
}

const Cart = styled.div`
width: calc(100% - 34px);
background: #FFFFFF;
border-radius: 5px;
margin-inline:17px;
margin-block: 10px;
padding: 13px;
display: flex;
justify-content: space-between;
`
const CheckBt = styled.button`
width: 69px;
height: 69px;
background: ${props => props.feito ? '#8FC549' : '#EBEBEB'};
border: 1px solid #E7E7E7;
border-radius: 5px;
`

const Div1 = styled.div`
h1{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-bottom: 8px;
color: #666666;}

p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;
}
`
const Atual = styled.span`
color: ${props => props.cor ? '#8FC549' : '#666666'};
`
const Record = styled.span`
color: ${props => props.cor ? '#8FC549' : '#666666'};
`