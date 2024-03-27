import "./PokemonCard.css";
import PropTypes from "prop-types";


function PokemonCard(pokemonprops) {

    const pokemon = pokemonprops.props;
    return (
        <div >
            {/* <img
                className="card-img"
                src={pokemonList[0].imgSrc}
                alt="Pikachu"
            /> */}
            <figure className="card">
                {pokemon.imgSrc ? (<img></img>) : <p></p>}
                <h2>{pokemon.name}</h2>
                <img className="card-img" src={pokemon.imgSrc} />
                
            </figure>
        </div>
    );
}

export default PokemonCard;
