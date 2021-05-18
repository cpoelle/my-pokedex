import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Details = ({ list }) => {
	const [pokemonDetails, setPokemonsDetails] = useState(null);
	const [pokemonUrl, setPokemonUrl] = useState(null);
	const { name } = useParams();

	useEffect(() => {
		const pokemonEntry = list.find((item) => item.name === name);
		setPokemonUrl(pokemonEntry.url);
	}, [list, name]);

	useEffect(() => {
		fetch(pokemonUrl)
			.then((response) => response.json())
			.then((pokemonData) => {
				setPokemonsDetails(pokemonData);
			});
	}, [pokemonUrl]);

	return (
		<div>
			{pokemonDetails && (
				<div className="poke-details">
					<h2 className="poke-title">{pokemonDetails.name}</h2>
					<p>Weight: {pokemonDetails.weight}</p>
					<p>Height: {pokemonDetails.height}</p>
				</div>
			)}
		</div>
	);
};

export default Details;
