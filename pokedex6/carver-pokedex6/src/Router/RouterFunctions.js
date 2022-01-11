import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const GoToDetailsPage = (navigate, name) =>{
    navigate(`/PokeDetailPage/${name}`)
}

export const GoToPokeDex = (navigate, setPokedex) =>{
    
    navigate(`/Pokedex`)
}

export const GoToHome = (navigate) => {
    navigate(`/`)
}

