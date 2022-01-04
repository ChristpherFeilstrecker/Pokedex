import React from "react";
import { useParams } from "react-router-dom";
import { useRequestData3 } from "../Components/CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../Components/urlbase";
import { ContainerPrincipal, ContainerImg, Container, BoxDetail, Img } from "./styled";


function PokeDetailPage() {
  const { name } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons3, getPokemons3] = useRequestData3(setIsLoading, `${BASE_URL}/${name}`)

  const pokemon = pokemons3


  console.log("veio do get", pokemons3)



  const GetPokemon = () => {
    return (
      <Container>
       
        <ContainerImg>
          <Img src={pokemon.sprites.front_default} />
          <Img src={pokemon.sprites.back_default} />
        </ContainerImg>

        <BoxDetail>
         <h2>Status</h2> 
         <p><b>HP:</b> {pokemon.stats[0].base_stat}</p> 
         <p><b>attack:</b> {pokemon.stats[1].base_stat}</p>
         <p><b>defense:</b> {pokemon.stats[2].base_stat}</p>
         <p><b>special-attack:</b> {pokemon.stats[3].base_stat}</p>
         <p><b>special-defense:</b> {pokemon.stats[4].base_stat}</p> 
         <p><b>speed:</b> {pokemon.stats[5].base_stat}</p> 
        </BoxDetail>

        <div>

          <div>
            <h2>Types:</h2> {pokemon.types.map((type, index) => {
              return index < 6 && <p>{type.type.name}</p>
            })}
          </div>

          <div>
            
            <h2>Moves:</h2> {pokemon.moves.map((move, index) => {
              return index < 6 && <p>{move.move.name}</p>
            })}
          </div>

        </div>
        
      </Container>
    )
  }


  return (
    <ContainerPrincipal>

    {pokemon && GetPokemon()}


    </ContainerPrincipal>
  );
}

export default PokeDetailPage;
