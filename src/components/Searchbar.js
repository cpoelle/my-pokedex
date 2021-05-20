import React from "react";
import style from "./Searchbar.module.css";

const Searchbar = () => {
	return (
		<section className={style.searchbar}>
			<input
				className={style.searchbar__inner}
				placeholder="Type in a Pokémon Number (only the best ... so: 1 to 151)"
			></input>
		</section>
	);
};

export default Searchbar;
