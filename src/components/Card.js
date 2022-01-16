import React from "react";

export default function Card(props) {
	console.log(props);

	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
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
