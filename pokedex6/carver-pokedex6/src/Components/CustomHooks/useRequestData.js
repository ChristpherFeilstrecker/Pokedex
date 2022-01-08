import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../urlbase"
import PokedexContext from "../Global/GlobalPokeStateContext";


export const useRequestData2 = (initialState, setIsLoading, url) => {
    const [data, setData] = useState(initialState);

    const GetPokemons = () => {

        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data.sprites.front_default);
                setIsLoading(false);
               
            })
            .catch((error) => {
                setIsLoading(false);
                console.log("errodata2Get", error.data)
                
            });
    };

    useEffect(() => {
        GetPokemons();
    }, []);

    return [data, GetPokemons]

}

export const useRequestData3 = (setIsLoading, url) => {
    const [data, setData] = useState();
 
    const GetPokemons = () => {

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
        GetPokemons();
    }, []);

    return [data, GetPokemons]

}