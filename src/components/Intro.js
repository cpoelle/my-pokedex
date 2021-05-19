import React from "react";
import { useLocation } from "react-router-dom";

const Intro = () => {
	let location = useLocation();
	if (location.pathname.match(/details/)) {
		return null;
	} else {
		return (
			<div>
				<h1>Your Pokédex v.1.0</h1>
				<p>
					Click on your favourite Pokémon and access detailed informations or
					just type in a Number (1-151) into the search bar.
				</p>
				<p>Have fun!</p>
			</div>
		);
	}
};

export default Intro;
