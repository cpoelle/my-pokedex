import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import BaseValues from "../components/BaseValues";

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
				<div>
					<div className={style.details__image}>
						<img
							src={pokemonDetails.sprites.front_default}
							alt={pokemonDetails.name}
						></img>
					</div>
					<h1 className={style.details__title}>{pokemonDetails.name}</h1>
					<BaseValues values={pokemonDetails} />
				</div>
			)}
		</div>
	);
};

export default Details;
