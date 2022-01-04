import React from "react";
import { ContainerPrincipal, Img } from "./styled";
import Logo from '../../img/pokemon-logo.png'
import { useRequestData2 } from "../CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../urlbase";
import { useNavigate } from "react-router-dom";
import { GoToDetailsPage } from "../../Router/RouterFunctions";

export default function PokeCard(props){
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons2, getPokemons2] = useRequestData2([], setIsLoading, `${BASE_URL}/${props.name}`)
    const navigate = useNavigate()

    return(
        <ContainerPrincipal>
            <p>{props.name}</p>
            <img src={pokemons2}/>
            <div>
                <button>adicionar</button>
                <button onClick={()=>GoToDetailsPage(navigate, props.name)}>ver detal.</button>
            </div>
        </ContainerPrincipal>
    )
}