import styled from "styled-components"
import check from '../assets/check.png'
export default function Card(props){
    return(<Cart>
        <Div1>
            <h1>{props.name}</h1>
            <p>Sequência atual: <Atual cor={props.done}>{props.atual} dias</Atual> <br/> Seu recorde: <Record cor={props.atual===props.high && props.high!==0}>{props.high} dias</Record></p>
            
        </Div1>
        <CheckBt feito={props.done}><img src={check} alt='check'/></CheckBt>
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