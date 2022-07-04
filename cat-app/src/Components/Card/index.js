function Card ({props}){
    return (
			<section className="card-container">
				<h4 className="card-header">{props.name}</h4>
				<div className="card-image">
					<img className="card-image-cat" src={props.image.url} alt={props.name} />
				</div>
			</section>
		);
}

export default Card