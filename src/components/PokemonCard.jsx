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
    return (
        <div className="card">
            <h2>{pokemonList[0].name}</h2>
            <img
                className="card-img"
                src={pokemonList[0].imgSrc}
                alt="Pikachu"
            />
        </div>
    );
}

export default PokemonCard;
