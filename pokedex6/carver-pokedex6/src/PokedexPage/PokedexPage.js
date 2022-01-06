import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import { GoToHome } from "../Router/RouterFunctions";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";
import { useContext } from "react";
import PokeCard from "../Components/PokeCard/PokeCard";
import { ContainerGrid, ContainerPrincipal } from "./styled";
import { useEffect } from "react";
function PokedexPage() {
  const {pokedex, setPokedex} = useContext(PokedexContext)
  const navigate = useNavigate()
  const page = true
  
  

  console.log("pokedexPage", pokedex)

  const pokeList = pokedex.map((pokemon) => {

    return (
      <PokeCard
        name={pokemon.name}
        page={page}
      />
    )
  })

    return (
      <ContainerPrincipal>
        <Header
        name={`Lista de Pokemóns`}
        buttonFunction={()=>GoToHome(navigate)}
        state={false}
        
        />
      <ContainerGrid>  
      {pokeList}
      </ContainerGrid>
      </ContainerPrincipal>
    );
  }
  
  export default PokedexPage;
  