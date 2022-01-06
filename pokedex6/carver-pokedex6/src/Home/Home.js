import React, { useEffect, useContext } from "react";
import { Button, ContainerGrid, ContainerPrincipal } from "./styled";
import { useRequestData, useRequestData2 } from "../Components/CustomHooks/useRequestData";
import { BASE_URL } from "../Components/urlbase";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";
import Header from "../Components/Header/Header";
import { GoToPokeDex } from "../Router/RouterFunctions";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokeUrl, setpokeUrl] = useState(`${BASE_URL}`)
  const {pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList} = useContext(PokedexContext)
  const [pokemons, getPokemons,  pokemons2] = useRequestData(setIsLoading, pokeUrl)
  const navigate = useNavigate()
  
    
  useEffect(() => {
    getPokemons()
    
  }, [])
  
  

  useEffect(() => {
    getPokemons()
    getPokeList()
    
  }, [pokeUrl])

  console.log(pokemonList)

  const getPokeList = () => {
    
    const pokeList = pokemonList && pokemonList.filter((item)=>{
      return item.pokeCart.inPokedex === false
    }).map((pokemon) => {
        return (
          <PokeCard
            pokemon={pokemon}
          />
        )
      })
      return pokeList
  }





  return (
    <ContainerPrincipal>
      <Header
        name={`Pokedex`}
        buttonFunction={() => GoToPokeDex(navigate)}
        state={false}
      />

      <ContainerGrid>
        {getPokeList()}
      </ContainerGrid>

      <Button onClick={() => setpokeUrl(pokemons2.previous)}>Previous Page</Button>
      <Button onClick={() => setpokeUrl(pokemons2.next)}>Next Page</Button>

    </ContainerPrincipal>
  );
}

export default Home;
