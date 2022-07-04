import { useState, useEffect } from "react";
import "./App.css";
import Button from "../Button";
import CatDisplay from "../CatDisplay";
import CardCollection from "../CardCollection";

function App() {
	const [catInfo, setCatInfo] = useState([
		{
			weight: {
				imperial: "7 - 16",
				metric: "3 - 7",
			},
			id: "abob",
			name: "American Bobtail",
			cfa_url: "http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx",
			vetstreet_url: "http://www.vetstreet.com/cats/american-bobtail",
			vcahospitals_url:
				"https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail",
			temperament: "Intelligent, Interactive, Lively, Playful, Sensitive",
			origin: "United States",
			country_codes: "US",
			country_code: "US",
			description:
				"American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
			life_span: "11 - 15",
			indoor: 0,
			lap: 1,
			alt_names: "",
			adaptability: 5,
			affection_level: 5,
			child_friendly: 4,
			dog_friendly: 5,
			energy_level: 3,
			grooming: 1,
			health_issues: 1,
			intelligence: 5,
			shedding_level: 3,
			social_needs: 3,
			stranger_friendly: 3,
			vocalisation: 3,
			experimental: 0,
			hairless: 0,
			natural: 0,
			rare: 0,
			rex: 0,
			suppressed_tail: 1,
			short_legs: 0,
			wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
			hypoallergenic: 0,
			reference_image_id: "hBXicehMA",
			image: {
				id: "hBXicehMA",
				width: 1600,
				height: 951,
				url: "https://cdn2.thecatapi.com/images/hBXicehMA.jpg",
			},
		},
	]);
	const [displayCatIndex, setCatIndex] = useState(0);
	const [catArray, setCatArray] = useState([]);

	useEffect(() => {
		const API = "https://api.thecatapi.com/v1/breeds";
		async function fetchMyAPI() {
			let promise = await fetch(API);
			let response = await promise.json();
			setCatInfo(response);
		}
		fetchMyAPI();
		console.log(catInfo);
	}, []);

	function getCat() {
		setCatIndex(Math.floor(Math.random() * 66));
		console.log(catInfo);
	}

	function storeCat() {
		let newCat = catInfo[displayCatIndex];
		setCatArray([...catArray, newCat]);
		getCat();
	}

	function clearCats() {
		setCatArray([]);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="main-heading">
					Cat Collector,
					<br></br>gotta <em>cats</em> 'em all!
				</h1>
				<CatDisplay props={catInfo[displayCatIndex]} handleClick={getCat} />
				<Button handleClick={storeCat} text="😻Store Cat😻" />
				<Button handleClick={clearCats} text="😿Clear Collection😿" />
				<CardCollection catArray={catArray} />
			</header>
		</div>
	);
}

export default App;
