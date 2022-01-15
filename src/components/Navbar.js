import React from "react";
import logo from "../images/airbnb-logo.png";

export default function Navbar() {
	return (
		<nav>
			<img src={logo} className="logo" alt="airbnb logo" />
		</nav>
	);
}
