import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";

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
					<h1 className={style.details__title}>{pokemonDetails.name}</h1>
					<img
						src={pokemonDetails.sprites.front_default}
						alt={pokemonDetails.name}
						className={style.details__image}
					></img>
					<p>Number: {pokemonDetails.id}</p>

					<p>Weight: {pokemonDetails.weight / 10 + " kg"}</p>
					<p>Height: {pokemonDetails.height * 10 + " cm"}</p>

					{/* Todo: make stats to own component */}
					<ul className={style.details__list}>
						{pokemonDetails.stats.map((stat, index) => {
							return (
								<li key={index} className={style.details__info}>
									{stat.stat.name + ": " + stat.base_stat}{" "}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Details;
