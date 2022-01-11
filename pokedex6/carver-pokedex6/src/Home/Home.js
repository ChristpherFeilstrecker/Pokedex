import React, { useEffect, useContext } from "react";
import { Button, ContainerGrid, ContainerPrincipal, ContainerButtons, ContainerPrincipalLoad } from "./styled";
import { useState } from 'react'
import PokeCard from "../Components/PokeCard/PokeCard";
import Header from "../Components/Header/Header";
import { GoToPokeDex } from "../Router/RouterFunctions";
import { useNavigate } from "react-router-dom";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";
import PokeIcon from "../img/Pokédex2.png"


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList, pokeUrl, setPokeUrl, pokemons2, setPokemons2 } = useContext(PokedexContext)
  const navigate = useNavigate()
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(5)
  const [totalPages, setTotalPages] = useState(56)
  const pages = Math.ceil(pokemonList.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPokemons = pokemonList.sort((a, b) => {
    return a.id - b.id
  }).slice(startIndex, endIndex)

  const CalculateMaxPagination = () => {
    let maxLeft = currentPage - Math.floor(maxVisibleButtons / 2)
    let maxRight = currentPage + Math.floor(maxVisibleButtons / 2)
    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = maxVisibleButtons
    }

    else if (maxRight > totalPages) {
      maxLeft = totalPages - (maxVisibleButtons - 1)
      maxRight = totalPages
    }

    return { maxLeft, maxRight }

  }

  const getPoke = () => {
    for (let i = 0; i < pokedex.length; i++) {
      for (let j = 0; j < pokemonList.length; j++) {
        if (pokedex[i].name === pokemonList[j].name) {
          pokemonList[j].pokedex = true

        }
      }
    }
  }

  const { maxLeft, maxRight } = CalculateMaxPagination()

  return (
    <ContainerPrincipal>
      <Header
        name={`Pokedex`}
        buttonFunction={() => GoToPokeDex(navigate)}
        state={false}
        icon={PokeIcon}
      />

      <ContainerGrid>

        {currentPokemons.length > 0 ? 
          currentPokemons.filter((item) => {
            return !item.pokedex
          }).map((pokemon) => {

            return (
              <PokeCard
                pokemon={pokemon}
              />
            )
          })
         : <ContainerPrincipalLoad>
          <h1>Carregando...</h1>
        </ContainerPrincipalLoad>}

      </ContainerGrid>

      <ContainerButtons>
        {getPoke()}
        {currentPage < 1 ? "" : <Button value={0} onClick={(e) => setCurrentPage(Number(e.target.value))}>First</Button>}
        {currentPage < 1 ? "" : <Button value={currentPage - 1} onClick={(e) => setCurrentPage(Number(e.target.value))}>Previous</Button>}
        {currentPage < 3 ? "" : <Button value={maxLeft} onClick={(e) => setCurrentPage(Number(e.target.value))}>{maxLeft}</Button>}
        {currentPage < 3 ? "" : <Button >...</Button>}
        <Button >{currentPage + 1}</Button>
        <Button >...</Button>
        <Button value={maxRight} onClick={(e) => setCurrentPage(Number(e.target.value))}>{maxRight}</Button>
        {currentPage === totalPages - 1 ? "" : <Button value={currentPage + 1} onClick={(e) => setCurrentPage(Number(e.target.value))}> Next </Button>}
        {currentPage === totalPages - 1 ? "" : <Button value={totalPages - 1} onClick={(e) => setCurrentPage(Number(e.target.value))}>Last</Button>}

      </ContainerButtons>


    </ContainerPrincipal>
  );
}

export default Home;
