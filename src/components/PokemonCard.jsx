import "./PokemonCard.css";
const pokemonList = [
    {
        name: "Carchacrok",
        imgSrc: "https://www.pokepedia.fr/images/thumb/6/69/Carchacrok-DEPS.png/800px-Carchacrok-DEPS.png",
    },
    {
        name: "mew",
    },
];
function PokemonCard() {
    const pokemon = pokemonList[0];
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
