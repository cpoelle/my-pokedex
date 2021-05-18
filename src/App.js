import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import Logo from "./components/Logo";

function App() {
	return (
		<div className="App">
			<Logo />
			<Pokedex />
		</div>
	);
}

export default App;
