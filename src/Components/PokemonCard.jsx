function PokemonCard({ pokemon, onAttributeClick }) {
  if (!pokemon || !pokemon.species) {
    return (
      <div className="pokemon-card">
        <h2>🧑‍🔬 Professor Oak says...</h2>
        <p>
          Click <strong>Discover Pokémon</strong> to begin your research adventure!
        </p>
      </div>
    );
  }

  const type = pokemon.pokemon?.types?.[0]?.type?.name;
  const ability = pokemon.pokemon?.abilities?.[0]?.ability?.name;
  const habitat = pokemon.species?.habitat ? pokemon.species.habitat.name : null;
  const color = pokemon.species?.color?.name;
  const generation = pokemon.species?.generation?.name;

  return (
    <div className="pokemon-card">
      <h2>{pokemon.pokemon?.name?.toUpperCase()}</h2>

      {pokemon.pokemon?.sprites?.other["official-artwork"]?.front_default && (
        <img
          src={pokemon.pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.pokemon.name}
        />
      )}

      <p>
        <strong>🔥 Type:</strong>{" "}
        {type ? (
          <button className="attr-btn" onClick={() => onAttributeClick(type)}>
            {type}
          </button>
        ) : "Unknown"}
      </p>

      <p>
        <strong>⭐ Ability:</strong>{" "}
        {ability ? (
          <button className="attr-btn" onClick={() => onAttributeClick(ability)}>
            {ability}
          </button>
        ) : "Unknown"}
      </p>

      <p>
        <strong>🌍 Habitat:</strong>{" "}
        <button 
          className="attr-btn" 
          onClick={() => onAttributeClick(habitat ? habitat : "Unknown")}
        >
          {habitat ? habitat : "Unknown"}
        </button>
      </p>

      <p>
        <strong>🎨 Color:</strong>{" "}
        {color ? (
          <button className="attr-btn" onClick={() => onAttributeClick(color)}>
            {color}
          </button>
        ) : "Unknown"}
      </p>

      <p>
        <strong>🧬 Generation:</strong>{" "}
        {generation ? (
          <button className="attr-btn" onClick={() => onAttributeClick(generation)}>
            {generation}
          </button>
        ) : "Unknown"}
      </p>

      <p>
        <strong>❤️ Base HP:</strong>{" "}
        {pokemon.pokemon.stats?.[0]?.base_stat ?? "Unknown"}
      </p>

      <p>
        <strong>📏 Height:</strong>{" "}
        {pokemon.pokemon?.height}
      </p>

      <p>
        <strong>⚖️ Weight:</strong>{" "}
        {pokemon.pokemon?.weight}
      </p>
    </div>
  );
}

export default PokemonCard;