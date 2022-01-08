import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0;
height: 100%;
background-color: #b9e3f0;
font-size: 24px;
`

export const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
margin: 15px;
height: 100%;
gap: 2vh;
font-size: 24px;
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
export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
margin-bottom: 15px;
`
