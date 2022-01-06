import React from "react";
import { Container, ContainerPrincipal, Img } from "./styled";
import Logo from '../../img/pokemon-logo.png'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GoToHome, GoToPokeDex } from "../../Router/RouterFunctions";
import { useState } from "react";

export default function Header(props) {
    const [pokedex, setPokedex] = useState("")
    const navigate = useNavigate()

    
    
    const page = (state) =>{
       if(state===true){
        return (
        <Container>
        <button onClick={props.buttonFunction}>{props.name}</button>
        <p><Img src={Logo}/></p>
        <button onClick={props.page ? props.RemovePokemon : props.AddPokemon}>{props.page ? "Remover" : "Adicionar"}</button>
        </Container>
        )}else if(state===false){
            return (
                <Container>
                <button onClick={props.buttonFunction}>{props.name}</button>
                <p><Img src={Logo}/></p>
                <p></p>
                </Container>
            )}
        

    } 

    
    return (
        <ContainerPrincipal>

            {page(props.state)}

            {/* <button onClick={props.buttonFunction}>{props.name}</button>
            <p><Img src={Logo}/></p>
            <p></p>
            <button>{props.name2}</button> */}

            
        </ContainerPrincipal>
    )


}