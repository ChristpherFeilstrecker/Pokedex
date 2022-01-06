import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../urlbase"
import PokedexContext from "../Global/GlobalPokeStateContext";

export const useRequestData = (setIsLoading, url) => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList } = useContext(PokedexContext)



    useEffect(() => {
        GetPokemons();
    }, []);

    useEffect(() => {
        const list = [];
        const list2 = {}
        const pokeCart = {
            inPokedex: false
        }
        pokeNames.forEach((item) => {
            axios
                .get(`${BASE_URL}/${item.name}`)
                .then((response) => {
                    const newList3 = {...response.data, pokeCart}
                    console.log(newList3)
                    setData3(response.data)
                    list.push(newList3)
                    
                    if (list.length === 20) {
                        const newList = list.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemonList(newList)
                    }

                    console.log(pokemonList)

                })
                .catch((error) => console.log(error.message));
        });
    }, [pokeNames]);

    const GetPokemons = () => {

        axios
            .get(`${url}`)
            .then((response) => {
                setPokeNames(response.data.results);
                setData2(response.data)
                setIsLoading(false);


            })
            .catch((error) => {
                setIsLoading(false);
                console.log("erroGet", error.data)

            });
    };



    return [data, GetPokemons, data2]

}

export const useRequestData2 = (initialState, setIsLoading, url) => {
    const [data, setData] = useState(initialState);

    const GetPosts = () => {

        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data.sprites.front_default);
                setIsLoading(false);
                // console.log('getdata2pokemon',response.data.sprites.front_default)
            })
            .catch((error) => {
                setIsLoading(false);
                console.log("errodata2Get", error.data)
                // setError(error);
            });
    };

    useEffect(() => {
        GetPosts();
    }, []);

    return [data, GetPosts]

}

export const useRequestData3 = (setIsLoading, url) => {
    const [data, setData] = useState();
    const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList } = useContext(PokedexContext)


    const GetPosts = () => {

        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data);

                setIsLoading(false);

            })
            .catch((error) => {
                setIsLoading(false);


            });
    };

    useEffect(() => {
        GetPosts();
    }, []);

    return [data, GetPosts]

}