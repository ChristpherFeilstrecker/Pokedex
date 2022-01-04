import React from "react";
import { ContainerPrincipal } from "./styled";
import { useRequestData, useRequestData2 } from "../Components/CustomHooks/useRequestData";
import { BASE_URL } from "../Components/urlbase";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, getPokemons] = useRequestData([], setIsLoading)
  
  

  const pokeList = pokemons.map((pokemon) => {

    return(
      <PokeCard 
      name={pokemon.name}
      />
    )
  })

    return (
      <ContainerPrincipal>
         
         {pokeList}
          

      </ContainerPrincipal>
    );
  }
  
  export default Home;
  