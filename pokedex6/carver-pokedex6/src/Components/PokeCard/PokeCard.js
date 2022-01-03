import React from "react";
import { ContainerPrincipal, Img } from "./styled";
import Logo from '../../img/pokemon-logo.png'

export default function PokeCard(){
    return(
        <ContainerPrincipal>
            <p><Img src={Logo}/></p>
        </ContainerPrincipal>
    )
}