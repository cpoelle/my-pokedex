import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./BackButton.module.css";

const BackButton = () => {
	const { name } = useParams();
	return (
		<div className={style.container}>
			<Link to="/" className={style.link}>
				<img className={style.ball} src="/assets/pokeball.png" alt=""></img>
				<span className="">Come back, {name}!</span>
			</Link>
		</div>
	);
};

export default BackButton;
