import React from "react";

const Searchbar = () => {
	return (
		<section className="searchbar">
			<input
				className="searchbar--inner"
				placeholder="Type in a Pokémon Number (only the best ... so: 1 to 151)"
			></input>
		</section>
	);
};

export default Searchbar;
