import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./ui/Card";
import style from "./List.module.css";

const List = ({ pokemons }) => {
	/* const [pokemonData, setPokemonData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		pokemons
			.sort((pok1, pok2) => pok1.id - pok2.id)
			.map((poke) => {
				fetch(poke.url)
					.then((response) => response.json())
					.then((pokeData) => {
						pokeArray.push(pokeData);
						setPokemonData([]);
						setIsLoading(false);
					})
					.catch((error) => {
						console.error("Error:", error);
						setIsLoading(false);
					});
			});
	}, [pokemons]);

	console.log(pokeArray); */

	return (
		<div className={style.list}>
			{/* 	{isLoading === true ? (
				<p>Loading ...</p>
			) : (
				pokemonData.map((poke) => {
					return (
						<Card key={poke.name}>
							<Link to={`/details/${poke.name}`}>{poke.name}</Link>
						</Card>
					);
				})
			)} */}
		</div>
	);
};

export default List;
