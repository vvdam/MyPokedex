import "./PokemonCard.css";

function PokemonCard(props) {
        

    const pokemon = props.props;
    console.log(pokemon);
        console.log(pokemon.name);
        console.log(pokemon.imgSrc);
    return (
        <div >
            
            <figure className="card">
                {pokemon.imgSrc ? (<img></img>) : <p></p>}
                <h2>{pokemon.name}</h2>
                <img className="card-img" src={pokemon.imgSrc} />
                
            </figure>
        </div>
    );
}

export default PokemonCard;
