import Card from "../Card"

function CardCollection ({catArray}) {
    function createCatCard(catinfo){
        return <Card props={catinfo} />
    }

    return(
    <section>
        <div className="card-heading">
            <h2>Your Purrsonal Collection</h2>
        </div>
        <div className="card-section">
            {catArray.map(createCatCard)}
        </div>
    </section>
    )
}

export default CardCollection