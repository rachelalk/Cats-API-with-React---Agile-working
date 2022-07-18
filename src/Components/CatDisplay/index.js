import "../App/App.css";
import React from "react";
import Button from "../Button";

function CatDisplay({ props, handleClick }) {
	return (
		<section className="cat-display">
			<div className="main-cat-card">
				<h2 className="cat-heading">{props.name}</h2>
				<div className="cat-image-container">
					<img className="cat-image" src={props.image.url} alt={props.name} />
				</div>
				<article className="cat-info">
					<p>Weight: {props.weight.metric}kg</p>
					<p>Origin: {props.origin}</p>
					<p>Temperament: {props.temperament}</p>
					<p>Lifespan: {props.life_span} years</p>
					<a
						href={props.wikipedia_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						Find out more
					</a>
				</article>
			</div>
			<div>
				<Button
					handleClick={handleClick}
					text={"🐈‍⬛Show me the kitties!🐈"}
				></Button>
			</div>
		</section>
	);
}

export default CatDisplay;
