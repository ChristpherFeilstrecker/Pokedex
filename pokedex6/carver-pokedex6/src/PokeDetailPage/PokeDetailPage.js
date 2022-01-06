import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useRequestData3 } from "../Components/CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../Components/urlbase";
import { ContainerPrincipal, ContainerImg, Container, BoxDetail, Img } from "./styled";
import Header from "../Components/Header/Header";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";



function PokeDetailPage() {
  const { name } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons3, getPokemons3, ] = useRequestData3(setIsLoading, `${BASE_URL}/${name}`)
  const {pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList} = useContext(PokedexContext)
  const navigate = useNavigate()
  const pokemon = pokemons3
  
  const pageDetail = true
  


  const AddPokemon = ()=>{
    // const pokeImg = pokemon.sprites.front_default
    const data2 = {
        name: name,
        // imagem: pokeImg
    }
    const newPokedex = [...pokedex, data2 ]
    setPokedex(newPokedex)

}

const RemovePokemon = ()=>{
    const index = pokedex.findIndex((pokeIndex)=>
    pokeIndex.name === name
    )
    const newPokedex = [...pokedex]
    newPokedex.splice(index, 1)
    setPokedex(newPokedex)
    
    
}

  



  const GetPokemon = () => {
    return (
      <Container>
       
        <ContainerImg>
          <Img src={pokemon.sprites.front_default} />
          <Img src={pokemon.sprites.back_default} />
        </ContainerImg>

        <BoxDetail>
         <h4>Status</h4> 
         <p><b>HP:</b> {pokemon.stats[0].base_stat}</p> 
         <p><b>attack:</b> {pokemon.stats[1].base_stat}</p>
         <p><b>defense:</b> {pokemon.stats[2].base_stat}</p>
         <p><b>special-attack:</b> {pokemon.stats[3].base_stat}</p>
         <p><b>special-defense:</b> {pokemon.stats[4].base_stat}</p> 
         <p><b>speed:</b> {pokemon.stats[5].base_stat}</p> 
        </BoxDetail>

        <div>

          <BoxDetail>
            <h3>Types:</h3> {pokemon.types.map((type, index) => {
              return index < 6 && <p>{type.type.name}</p>
            })}
          </BoxDetail>

          <BoxDetail>
            
            <h3>Moves:</h3> {pokemon.moves.map((move, index) => {
              return index < 6 && <p>{move.move.name}</p>
            })}
          </BoxDetail>

        </div>
        
      </Container>
    )
  }


  return (
    <ContainerPrincipal>
      <Header
      name={`voltar`}
      buttonFunction={()=>navigate(-1)}
      state={true}
      name2={`Add/Remover Pokedex`}
      pokeName={name}
      AddPokemon = {AddPokemon}
      RemovePokemon = {RemovePokemon}
      // pageDetail={pageDetail}
      />

    {pokemon && GetPokemon()}


    </ContainerPrincipal>
  );
}

export default PokeDetailPage;
