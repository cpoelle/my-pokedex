import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./Intro";
import List from "./List";
import Details from "./Details";
import style from "./Pokedex.module.css";

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
				<section className={style.pokedex__list}>
					{isLoading === true ? (
						<p>Loading ...</p>
					) : (
						<List pokemons={pokemon} />
					)}
				</section>
				<section className={style.pokedex__details}>
					<Switch>
						<Route path="/" exact>
							<Intro />
						</Route>
						<Route path="/details/:name">
							<Details list={pokemon}></Details>
						</Route>
					</Switch>
				</section>
				<div className={style.pokedex__shadow}></div>
			</div>
		</Router>
	);
}

export default Pokedex;
