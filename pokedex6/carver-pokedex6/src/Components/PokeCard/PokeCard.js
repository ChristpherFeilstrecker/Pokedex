import React, { useContext, useEffect } from "react";
import { ContainerPrincipal, Img, Button } from "./styled";
import Logo from '../../img/pokemon-logo.png'
import { useRequestData2 } from "../CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../urlbase";
import { useNavigate } from "react-router-dom";
import { GoToDetailsPage } from "../../Router/RouterFunctions";
import PokedexContext from "../Global/GlobalPokeStateContext";

export default function PokeCard(props){
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons2, getPokemons2] = useRequestData2([], setIsLoading, `${BASE_URL}/${props.name}`)
    const navigate = useNavigate()
    const {pokedex, setPokedex} = useContext(PokedexContext)
    


    useEffect(()=>{
        getPokemons2()
    }, [props.name])

    const AddPokemon = ()=>{
        const data2 = {
            name: props.name,
            imagem: pokemons2
        }
        const newPokedex = [...pokedex, data2 ]
        setPokedex(newPokedex)
        
        console.log("Carrinho pokedex", pokedex)
    }

    const RemovePokemon = ()=>{
        const index = pokedex.findIndex((pokeIndex)=>
        pokeIndex.name === props.name
        )
        const newPokedex = [...pokedex]
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)
        
        console.log("Carrinho pokedex", pokedex)
    }
    
console.log("global pokedex", pokedex)
    return(
        <ContainerPrincipal>
            <p>{props.name}</p>
            <img src={pokemons2}/>
            <div>
                <Button onClick={props.page ? RemovePokemon : AddPokemon}>{props.page ? "Remover" : "Adicionar"}</Button>
                <Button onClick={()=>GoToDetailsPage(navigate, props.name)}>ver detal.</Button>
            </div>
        </ContainerPrincipal>
    )
}