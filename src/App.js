import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
	const cardEl = data.map((experience) => {
		return (
			<Card
				title={experience.title}
				price={experience.price}
				img={experience.coverImg}
				rating={experience.stats.rating}
				reviewCount={experience.stats.reviewCount}
				location={experience.location}
			/>
		);
	});

	return (
		<div>
			<Navbar />
			<Hero />
			{cardEl}
		</div>
	);
}
