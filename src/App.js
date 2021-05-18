import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/List";
import Details from "./components/Details";

function App() {
	const initData = JSON.parse(localStorage.getItem("Pokemons")) || [];
	const [pokemon, setPokemon] = useState(initData);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
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
			<div className="App">
				<section className="aside">
					{isLoading === true ? (
						<p>Loading ...</p>
					) : (
						<List pokemons={pokemon} />
					)}
				</section>
				<section className="details">
					<div className="detailsContainer">
						<Route path="/details/:name">
							<Details list={pokemon}></Details>
						</Route>
					</div>
				</section>
			</div>
		</Router>
	);
}

export default App;
