import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import { GoToHome } from "../Router/RouterFunctions";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";
import { useContext } from "react";
import PokeCard from "../Components/PokeCard/PokeCard";
import { ContainerGrid, ContainerPokedexLoad, ContainerPrincipal } from "./styled";
import { useEffect } from "react";
import { Container } from "../PokeDetailPage/styled";
import PokeIcon from "../img/Pokedex.png"


function PokedexPage() {
  const { pokedex, setPokedex } = useContext(PokedexContext)
  const navigate = useNavigate()
  const page = true

  const pokeList = pokedex.map((pokemon) => {

    return (
      <PokeCard
        pokemon={pokemon}
        page={page}
      />
    )

  })

  return (
    
          <ContainerPrincipal>
          
      <Header
       
        name={`Lista de Pokemons`}
        buttonFunction={() => GoToHome(navigate)}
        state={false}
        icon = {PokeIcon}
      />
      
      <ContainerGrid>
      {pokeList.length > 0 ? (
              <>{pokeList}</>
            ) : (
              <ContainerPokedexLoad>
                <p>Pokedex vazia</p>
              </ContainerPokedexLoad>
            )}
        
      </ContainerGrid>
      
    </ContainerPrincipal>
    

  );
}

export default PokedexPage;
