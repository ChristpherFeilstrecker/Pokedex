import styled from "styled-components";

export const ContainerPrincipal = styled.div`
background-color: #b9e3f0;
display: flex;
flex-direction: column;
`

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
margin: 0;
flex-grow: 5;
gap: 2vh;
font-size: 20px;
height:90vh;
@media (min-device-width : 481px) and (max-device-width : 800px) {
        grid-template-columns: 1fr 1fr ;
      }

      @media (min-device-width : 320px) and (max-device-width : 480px) {
        grid-template-columns: 1fr ;
      }
`

export const ContainerImg = styled.div`
display: flex;
flex-direction: column;
gap: 5vh;
align-items: center;
margin-top:20px;
`
export const BoxDetail = styled.div`
display: flex;
flex-direction: column;
padding-left:40px;
margin: 0;
flex-grow: 0;
background-color: #94d6eb;
border-radius: 10px;
margin-top:20px;
margin-right:20px;
`

export const Img = styled.img`
margin-top:-120px;
height: 150px;
width: 150px;
`

export const ContainerImgDetail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
flex-grow: 0;
background-color: #94d6eb;
border-radius: 10px;
`

export const BackCircleDetail = styled.div`
margin-top: 40px;
background-color: white;
height:80px;
width:70px;
border-radius:50px;
`

export const TextTitle = styled.div`
margin-top:10px;
font-size:40px ;
font-weight: bold;
`
export const TextSubTitle = styled.div`
margin-top:5px;
font-size:30px ;
font-weight: bold;
`

export const Text = styled.div`
margin-bottom:10px;
`