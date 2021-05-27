import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (pokemon) => {
	const [pokemonDetails, setPokemonsDetails] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(pokemon.pokemon.url)
			.then((response) => response.json())
			.then((pokemonData) => {
				setPokemonsDetails(pokemonData);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error:", error);
				setIsLoading(false);
			});
	}, [pokemon.pokemon.url]);

	return (
		<div className={style.card}>
			{isLoading === true ? (
				<p>Loading ...</p>
			) : (
				<Link to={`/details/${pokemonDetails.name}`}>
					<img
						src={pokemonDetails.sprites.front_default}
						alt={pokemonDetails.name}
						className={style.image}
					></img>
					<span className={style.title}>
						#{pokemonDetails.id} {pokemonDetails.name}
					</span>
				</Link>
			)}
		</div>
	);
};

export default Card;
