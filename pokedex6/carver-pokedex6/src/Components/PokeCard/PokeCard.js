import React, { useContext, useEffect } from "react";
import { ContainerCards, Img, Button, ButtonsCard, BackCircle, PokeInfo } from "../PokeCard/styled";
import Logo from '../../img/pokemon-logo.png'
import { useRequestData2 } from "../CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../urlbase";
import { useNavigate } from "react-router-dom";
import { GoToDetailsPage } from "../../Router/RouterFunctions";
import PokedexContext from "../Global/GlobalPokeStateContext";

export default function PokeCard(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemons2, getPokemons2] = useRequestData2([], setIsLoading, `${BASE_URL}/${props.pokemon.name}`)
    const navigate = useNavigate()
    const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList } = useContext(PokedexContext)
    const [savePokedex, setSavePokedex] = useState([])
    // setSavePokedex(pokedex)

    useEffect(() => {
        getPokemons2()
    }, [props.pokemon])

    const AddPokemon = () => {

        const newPokeNames = [...pokemonList]
        newPokeNames.forEach((item) => {
            if (item.name === props.pokemon.name) { item.pokedex = true }
        })
        setPokemonList(newPokeNames)

        const data2 = {
            name: props.pokemon.name,
            imagem: pokemons2,
        }
        const newPokedex = [...pokedex, data2]
        setPokedex(newPokedex)

    }

    const RemovePokemon = () => {
        const index = pokedex.findIndex((pokeIndex) =>
            pokeIndex.name === props.name
        )
        const newPokedex = [...pokedex]
        newPokedex.splice(index, 1)
        setPokedex(newPokedex)

    }

    const pokemonName = props.pokemon.name
    const nameUpper = pokemonName[0].toUpperCase() + pokemonName.substring(1)

    return (
        <ContainerCards>
            <BackCircle></BackCircle>
            <PokeInfo><b>{nameUpper}</b></PokeInfo>
            <img src={pokemons2} />
            <ButtonsCard>
                <Button onClick={props.page ? RemovePokemon : AddPokemon}>{props.page ? "Remover" : "Adicionar"}</Button>
                <Button onClick={() => GoToDetailsPage(navigate, props.pokemon.name)}>ver detal.</Button>
            </ButtonsCard>

        </ContainerCards>
    )
}