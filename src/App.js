import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
	const cardEl = data.map((experience) => {
		return (
			<Card
				key={experience.id}
				title={experience.title}
				price={experience.price}
				img={experience.coverImg}
				rating={experience.stats.rating}
				reviewCount={experience.stats.reviewCount}
				location={experience.location}
				openSpots={experience.openSpots}
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
