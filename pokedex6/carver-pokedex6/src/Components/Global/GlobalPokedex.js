import React, { useState, useEffect } from "react";
import PokedexState from "./GlobalPokeStateContext";
import axios from "axios";
import { BASE_URL } from "../urlbase";

const GlobalPokedex = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokeNames, setPokeNames] = useState([])
    const [pokemonList, setPokemonList] = useState([])
    const [pokeUrl, setPokeUrl] = useState(`${BASE_URL}`)
    const [pokemons2, setPokemons2] = useState({})
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});



    useEffect(() => {
        GetPokemons();
    }, [pokeUrl]);

    useEffect(() => {
        const list = [];
        const pokeCart = {
            inPokedex: false
        }

        pokeNames.forEach((item) => {
            axios
                .get(`${BASE_URL}/${item.name}`)
                .then((response) => {
                    const newList3 = { ...response.data, pokeCart }
                    setData3(response.data)
                    list.push(newList3)

                    if (list.length === 20) {
                        const newList = list.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemonList(newList)
                    }
                })
                .catch((error) => console.log(error.message));
        });
    }, [pokeNames, pokeUrl]);

    const GetPokemons = () => {

        axios
            .get(`${pokeUrl}`)
            .then((response) => {
                setPokeNames(response.data.results);
                setPokemons2(response.data)
            })
            .catch((error) => {
                console.log("erroGet", error.data)

            });
    };


    const data = {
        pokedex,
        setPokedex,
        pokeNames,
        setPokeNames,
        pokemonList,
        setPokemonList,
        pokeUrl,
        setPokeUrl,
        pokemons2,
        setPokemons2
    }

    return (
        <PokedexState.Provider value={data}>
            {props.children}
        </PokedexState.Provider>

    )
}
export default GlobalPokedex;