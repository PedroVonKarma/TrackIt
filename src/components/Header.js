import styled from "styled-components"
import { useContext } from "react";
import AppContext from "../AppContext/Context";
export default function Header(){
    const {obj} = useContext(AppContext)
    return(
        <Bar data-test="header"><h1>TrackIt</h1><img src={obj.image} alt='usuario'/></Bar>
    )
}

const Bar = styled.div`
width: 100%;
height: 70px;
left: 0px;
top: 0px;
position: fixed;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
padding-inline: 20px;
h1{
    font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
}
img{
    width: 51px;
height: 51px;
border-radius: 98.5px;
object-fit: cover;
}
`