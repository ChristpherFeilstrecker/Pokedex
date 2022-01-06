import React, { useState } from "react";
import PokedexState from "./GlobalPokeStateContext";

const GlobalPokedex = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokeNames, setPokeNames] = useState([])
    const [pokemonList, setPokemonList] = useState([])

    const data = {
        pokedex,
        setPokedex,
        pokeNames,
        setPokeNames,
        pokemonList,
        setPokemonList
    }

    return (
        <PokedexState.Provider value={data}>
            {props.children}
        </PokedexState.Provider>

    )
}
export default GlobalPokedex;