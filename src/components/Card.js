import React from "react";

export default function Card(props) {
	console.log(props);

	return (
		<div className="card">
			<div className="banner">sold out</div>
			<img
				className="card--img"
				src={`../images/${props.img}`}
				alt="experience teaser"
			/>
			<div className="rating gray">
				<img className="rating--star" src="../images/star.png" alt="" />
				<span className="rating--value"> {props.rating}</span>
				<span className="rating--count"> {props.reviewCount}</span>
				<span className="country"> &bull; {props.location}</span>
			</div>
			<div className="experience">
				<p className="experience--title">{props.title}</p>
				<p className="experience--price">
					<strong>From ${props.price}</strong> / person
				</p>
			</div>
		</div>
	);
}
