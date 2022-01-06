import React from "react";
import { Container, ContainerPrincipal, Img } from "./styled";
import Logo from '../../img/pokemon-logo.png'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GoToHome, GoToPokeDex } from "../../Router/RouterFunctions";
import { useState, useContext } from "react";
import PokedexContext from "../../Components/Global/GlobalPokeStateContext";

export default function Header(props) {
    const { pokedex, setPokedex } = useContext(PokedexContext)
    const navigate = useNavigate()

    const findPokemon = (poke) =>{
        if( poke.name === props.pokeName){
            return true
        }
    }

    const pokeInclude = pokedex.find(findPokemon)

    const find2 = (poke) =>{
        if(poke !== undefined){
            return true
        }
    }


    const page = (state) => {
        if (state === true) {
            return (
                <Container>
                    <button onClick={props.buttonFunction}>{props.name}</button>
                    <p><Img src={Logo} /></p>
                    <button onClick={find2(pokeInclude) ? props.RemovePokemon : props.AddPokemon}>{find2(pokeInclude) ? "Remover" : "Adicionar"  }</button>
                </Container>
            )
        } else if (state === false) {
            return (
                <Container>
                    <button onClick={props.buttonFunction}>{props.name}</button>
                    <p><Img src={Logo} /></p>
                    <p></p>
                </Container>
            )
        }


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