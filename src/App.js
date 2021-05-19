import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";

function App() {
	return (
		<div className="App">
			<Logo />
			<Searchbar />
			<Pokedex />
		</div>
	);
}

export default App;
