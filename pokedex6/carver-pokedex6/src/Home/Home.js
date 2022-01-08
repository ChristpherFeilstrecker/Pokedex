import React, { useEffect, useContext } from "react";
import { Button, ContainerGrid, ContainerPrincipal, ContainerButtons } from "./styled";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";
import Header from "../Components/Header/Header";
import { GoToPokeDex } from "../Router/RouterFunctions";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList, pokeUrl, setPokeUrl, pokemons2, setPokemons2 } = useContext(PokedexContext)
  const navigate = useNavigate()

  const getPokeList = () => {

    const pokeList = pokemonList && pokemonList.filter((item) => {
      return !item.pokedex
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

      <ContainerButtons>
        <Button onClick={() => setPokeUrl(pokemons2.previous)}>Previous Page</Button>
        <Button onClick={() => setPokeUrl(pokemons2.next)}>Next Page</Button>
      </ContainerButtons>


    </ContainerPrincipal>
  );
}

export default Home;
