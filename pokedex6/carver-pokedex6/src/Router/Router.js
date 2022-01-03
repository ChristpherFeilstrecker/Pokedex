import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import PokeDetailPage from "../PokeDetailPage/PokeDetailPage";
import PokedexPage from "../PokedexPage/PokedexPage";
import Header from "../Components/Header/Header";
import ErrorPage from "../Error/ErrorPage";
export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>    
                    <Route exact path={"/"} element={<Home />}/>
                    <Route exact path={"/Pokedex"} element={<PokedexPage />}/>
                    <Route exact path={"/PokeDetailPage"} element={<PokeDetailPage />}/>
                    <Route element={<ErrorPage />}/>

                </Routes>
        </BrowserRouter>
    )

}