import React, { useEffect, useContext } from "react";
import { Button, ContainerGrid, ContainerPrincipal, ContainerButtons, ContainerPrincipalLoad } from "./styled";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";
import Header from "../Components/Header/Header";
import { GoToPokeDex } from "../Router/RouterFunctions";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";
import PokeIcon from "../img/Pokédex.png"


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
        icon = {PokeIcon}
      />

      <ContainerGrid>
      {pokemonList.length > 0 ? (
              <>{getPokeList()}</>
            ) : (
              <ContainerPrincipalLoad>
                <h1>Carregando...</h1>
              </ContainerPrincipalLoad>
            )}

      </ContainerGrid>

      <ContainerButtons>
        <Button onClick={() => setPokeUrl(pokemons2.previous)}>Previous Page</Button>
        <Button onClick={() => setPokeUrl(pokemons2.next)}>Next Page</Button>
      </ContainerButtons>


    </ContainerPrincipal>
  );
}

export default Home;
