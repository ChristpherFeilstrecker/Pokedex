import styled from "styled-components";

export const ContainerCards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
border: 1px solid black;
flex-grow: 0;
font-size: 24px;
height: 100%;
background-color: #94d6eb;
border-radius: 10px;
`
export const ButtonsCard = styled.div`
margin-bottom:15px;
gap:5px;
`
export const BackCircle = styled.div`
margin-top: 60px;
background-color: white;
height:80px;
width:70px;
border-radius:50px;
`
export const PokeInfo = styled.div`
margin-top:-120px;
`

export const Button = styled.button`
font-size: 24px;
color: white;
border-color: #3498db;
box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
:hover {
    border-color: white;
  }
`