import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useRequestData3 } from "../Components/CustomHooks/useRequestData";
import { useState } from "react";
import { BASE_URL } from "../Components/urlbase";
import { ContainerPrincipal, ContainerImg, Container, BoxDetail, Img, ContainerImgDetail, BackCircleDetail, Text, TextTitle, TextSubTitle } from "./styled";
import Header from "../Components/Header/Header";
import PokedexContext from "../Components/Global/GlobalPokeStateContext";

function PokeDetailPage() {
  const { name } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons3, getPokemons3,] = useRequestData3(setIsLoading, `${BASE_URL}/${name}`)
  const { pokedex, setPokedex, pokeNames, setPokeNames, pokemonList, setPokemonList } = useContext(PokedexContext)
  const navigate = useNavigate()
  const pokemon = pokemons3
  const pokemonName = name
  const nameUpper = pokemonName[0].toUpperCase() + pokemonName.substring(1)


  const AddPokemon = () => {

    const data2 = {
      name: name,

    }
    const newPokedex = [...pokedex, data2]
    setPokedex(newPokedex)

  }

  const RemovePokemon = () => {
    const index = pokedex.findIndex((pokeIndex) =>
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
          <ContainerImgDetail>

            <BackCircleDetail />
            <Img src={pokemon.sprites.front_default} />
          </ContainerImgDetail>
          <ContainerImgDetail>
            <BackCircleDetail />
            <Img src={pokemon.sprites.back_default} />
          </ContainerImgDetail>

        </ContainerImg>

        <BoxDetail>

          <TextTitle>{nameUpper}</TextTitle>
          <TextSubTitle>Status</TextSubTitle>
          <Text><b>HP:</b> {pokemon.stats[0].base_stat}</Text>
          <Text><b>attack:</b> {pokemon.stats[1].base_stat}</Text>
          <Text><b>defense:</b> {pokemon.stats[2].base_stat}</Text>
          <Text><b>special-attack:</b> {pokemon.stats[3].base_stat}</Text>
          <Text><b>special-defense:</b> {pokemon.stats[4].base_stat}</Text>
          <Text><b>speed:</b> {pokemon.stats[5].base_stat}</Text>
        </BoxDetail>

        <div>

          <BoxDetail>
            <TextSubTitle>Types:</TextSubTitle> {pokemon.types.map((type, index) => {
              return index < 6 && <Text>{type.type.name}</Text>
            })}
          </BoxDetail>

          <BoxDetail>

            <TextSubTitle>Moves:</TextSubTitle> {pokemon.moves.map((move, index) => {
              return index < 6 && <Text>{move.move.name}</Text>
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
        buttonFunction={() => navigate(-1)}
        state={true}
        name2={`Add/Remover Pokedex`}
        pokeName={name}
        AddPokemon={AddPokemon}
        RemovePokemon={RemovePokemon}

      />

      {pokemon && GetPokemon()}


    </ContainerPrincipal>
  );
}

export default PokeDetailPage;
