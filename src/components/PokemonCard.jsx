function PokemonCard() {
    return (
        <div className="pokemon-card">
            <h2>Carchacrok</h2>
            <img
                src={
                    "https://www.pokepedia.fr/images/thumb/6/69/Carchacrok-DEPS.png/800px-Carchacrok-DEPS.png"
                }
                alt="Pikachu"
            />
            <ul>
                <li>Type: dragon/sol</li>
                <li>HP: 50</li>
                <li>Attack: ???</li>
                <li>Defense: ???</li>
            </ul>
        </div>
    );
}

export default PokemonCard;
