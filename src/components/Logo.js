import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={style.logo}>
			<img src="/assets/1200x_logo_pokemon.png" alt="Logo" />
		</div>
	);
};

export default Logo;
