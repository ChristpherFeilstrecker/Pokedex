import React, { useState } from "react";
import PokedexState from "./GlobalPokeStateContext";

const GlobalPokedex = (props) => {
    const [pokedex, setPokedex] = useState([])


    return (
        <PokedexState.Provider value={{ pokedex, setPokedex }}>
            {props.children}
        </PokedexState.Provider>

    )
}
export default GlobalPokedex;