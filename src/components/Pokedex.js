import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "./List";
import Details from "./Details";

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
			<div className="pokedex__container">
				<section className="list">
					{isLoading === true ? (
						<p>Loading ...</p>
					) : (
						<List pokemons={pokemon} />
					)}
				</section>
				<section className="details">
					<Route path="/details/:name">
						<Details list={pokemon}></Details>
					</Route>
				</section>
				<div className="pokedex__shadow"></div>
			</div>
		</Router>
	);
}

export default Pokedex;
