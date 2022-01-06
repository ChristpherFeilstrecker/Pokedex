import React, { useEffect } from "react";
import { Button, ContainerGrid, ContainerPrincipal } from "./styled";
import { useRequestData, useRequestData2 } from "../Components/CustomHooks/useRequestData";
import { BASE_URL } from "../Components/urlbase";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";
import Header from "../Components/Header/Header";
import { GoToPokeDex } from "../Router/RouterFunctions";
import { useNavigate } from "react-router-dom";


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokeUrl, setpokeUrl] = useState(`${BASE_URL}`)
  const [pokemons, getPokemons, previous, next, pokemons2] = useRequestData(setIsLoading, pokeUrl)
  const navigate = useNavigate()
  // let pokeNames = []
  let pokeNames = pokemons

  console.log(pokeUrl)
  console.log(pokemons2.next)

  useEffect(() => {
    getPokemons()
  }, [pokeUrl])

  // const getPokeList = () => {
  const pokeList = pokeNames.map((pokemon) => {

    return (
      <PokeCard
        name={pokemon.name}
      />
    )
  })

  
  
  

  return (
    <ContainerPrincipal>
      <Header
      name={`Pokedex`}
      buttonFunction={()=>GoToPokeDex(navigate)}
      state={false}
      />

      <ContainerGrid>
        {pokeList}
      </ContainerGrid>

      <Button onClick={() => setpokeUrl(pokemons2.previous)}>Previous Page</Button>
      <Button onClick={() => setpokeUrl(pokemons2.next)}>Next Page</Button>

    </ContainerPrincipal>
  );
}

export default Home;
