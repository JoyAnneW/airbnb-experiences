import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
	const cardEl = data.map((experience) => {
		return (
			<Card
				key={experience.id}
				{...experience}
			/>
		);
	});

	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards-list">{cardEl}</section>
		</div>
	);
}
