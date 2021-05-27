import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./List";
import Details from "../pages/Details";
import style from "./Pokedex.module.css";
import BackButton from "../components/BackButton.js";

function Pokedex() {
	const initData = JSON.parse(localStorage.getItem("Pokemons")) || [];
	const [pokemon, setPokemon] = useState(initData);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
			.then((response) => response.json())
			.then((pokemonData) => {
				localStorage.setItem("Pokemons", JSON.stringify(pokemonData.results));
				setPokemon(pokemonData.results);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error:", error);
				setIsLoading(false);
			});
	}, []);

	return (
		<Router>
			<div className={style.pokedex__container}>
				<Switch>
					<Route path="/" exact>
						{isLoading === true ? (
							<p>Loading ...</p>
						) : (
							<List pokemons={pokemon} />
						)}
					</Route>
					<Route path="/details/:name">
						<section className={style.pokedex__details}>
							<BackButton />
							<Details list={pokemon}></Details>
						</section>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default Pokedex;
