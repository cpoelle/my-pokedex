import React from "react";
import Card from "./Card";
import style from "./List.module.css";

const List = ({ pokemons }) => {
	return (
		<div className={style.list}>
			{pokemons
				.sort((pok1, pok2) => pok1.id - pok2.id)
				.map((pokemon) => {
					return <Card key={pokemon.name} pokemon={pokemon}></Card>;
				})}
		</div>
	);
};

export default List;
