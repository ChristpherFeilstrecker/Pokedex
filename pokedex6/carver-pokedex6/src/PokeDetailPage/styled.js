import styled from "styled-components";

export const ContainerPrincipal = styled.div`
/* display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
margin: 0;
border: 1px solid blue;
height: 100%;
gap: 2vh; */
`

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
margin: 0;
border: 1px solid blue;
height: 100%;
gap: 2vh;
font-size: 20px;
/* font-weight: bolder; */
`

export const ContainerImg = styled.div`
display: flex;
flex-direction: column;
gap: 10vh;
align-items: center;
justify-content: center;
`
export const BoxDetail = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
box-shadow: 5px 5px black;
background-color: darkgrey;
padding-left:10px;
`

export const Img = styled.img`
height: 40%;
width: 40%;
background-color: darkgrey;
`