import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../urlbase"

export const useRequestData = (initialState, setIsLoading) => {
    const [data, setData] = useState(initialState);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const GetPosts = () => {
        
        axios
            .get(`${BASE_URL}`)
            .then((response) => {
                setData(response.data.results);
                setIsLoading(false);
                console.log('getpokemon',response.data.results)
            })
            .catch((error) => {
                setIsLoading(false);
                console.log("erroGet",error.data)
                // setError(error);
            });
    };

    useEffect(() => {
        GetPosts();
    }, []);

    return [data, GetPosts]
    
}

export const useRequestData2 = (initialState, setIsLoading, url) => {
    const [data, setData] = useState(initialState);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const GetPosts = () => {
        
        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data.sprites.front_default);
                setIsLoading(false);
                console.log('getdata2pokemon',response.data.sprites.front_default)
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