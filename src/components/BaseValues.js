import React from "react";
import style from "./BaseValues.module.css";

const BaseValues = (data) => {
	return (
		<div className={style.container}>
			<div className={style.generals}>
				<p>Number: {data.values.id}</p>
				<p>Weight: {data.values.weight / 10 + " kg"}</p>
				<p>Height: {data.values.height * 10 + " cm"}</p>
			</div>
			<div className={style.stats}>
				<ul>
					{data.values.stats.map((stat, index) => {
						return (
							<li key={index} className={style.details__info}>
								{stat.stat.name + ": " + stat.base_stat}{" "}
							</li>
						);
					})}
				</ul>
			</div>{" "}
		</div>
	);
};

export default BaseValues;
