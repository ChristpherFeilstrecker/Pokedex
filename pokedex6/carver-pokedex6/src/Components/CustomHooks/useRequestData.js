import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../urlbase"

export const useRequestData = ( setIsLoading, url) => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState({});
    const [previous, setPrevious] = useState("")
    const [next, setNext] = useState("")
    
    const GetPokemons = () => {
        
        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data.results);
                setData2(response.data)
                setIsLoading(false);
                // console.log('getpokemon',response.data.results)
               
            })
            .catch((error) => {
                setIsLoading(false);
                console.log("erroGet",error.data)
                // setError(error);
            });
    };

    useEffect(() => {
        GetPokemons();
    }, []);

    return [data, GetPokemons, previous, next, data2]
    
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
                console.log("errodata2Get",error.data)
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
   

    const GetPosts = () => {
        
        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
                console.log('data3', response.data)
            })
            .catch((error) => {
                setIsLoading(false);
                console.log("errodata3", error.data)
                
            });
    };

    useEffect(() => {
        GetPosts();
    }, []);

    return [data, GetPosts]

}