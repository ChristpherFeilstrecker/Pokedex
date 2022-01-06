import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0;
border: 1px solid blue;
height: 100%;

font-size: 24px;
`

export const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
margin: 0;
border: 1px solid blue;
height: 100%;
gap: 2vh;
font-size: 24px;
`

export const Button = styled.button`
font-size: 24px;
`

