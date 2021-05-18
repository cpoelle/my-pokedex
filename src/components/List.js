import React from "react";
import { Link } from "react-router-dom";

const List = ({ pokemons }) => {
	return (
		<ul>
			{pokemons
				.sort((pok1, pok2) => pok1.id - pok2.id)
				.map((poke) => {
					return (
						<li key={poke.name}>
							<Link to={`/details/${poke.name}`}>{poke.name}</Link>
						</li>
					);
				})}
		</ul>
	);
};

export default List;
