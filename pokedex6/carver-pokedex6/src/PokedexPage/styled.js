import styled from "styled-components";

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0;
border: 1px solid blue;
height: 100%;
background-color: #b9e3f0;
font-size: 24px;
`

export const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
margin: 20px;
padding: 0px 10px;
height: 100vh;
gap: 2vh;
font-size: 24px;
@media (min-device-width : 481px) and (max-device-width : 800px) {
        grid-template-columns: 1fr 1fr ;
      }
      @media (min-device-width : 320px) and (max-device-width : 480px) {
        grid-template-columns: 1fr ;
      }
`

export const Button = styled.button`
font-size: 24px;
`
export const ContainerPokedexLoad = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0;
height: 60vh;
background-color: #b9e3f0;
font-size: 24px;
`
