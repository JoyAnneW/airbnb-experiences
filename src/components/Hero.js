import React from "react";
import grid from "../images/photo-grid.png";

export default function Hero() {
	return (
		<section className="hero">
			<img className="hero--img" src={grid} alt="collection of experiences" />
			<h1 className="hero--title">Online Experiences</h1>
			<p className="hero--paragraph">
				Join unique interactive activites led by one-of-a-kind hosts, all
				without leaving home!
			</p>
		</section>
	);
}
