function PokemonCard({ pokemon }) {
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
        {pokemon.pokemon?.types?.[0]?.type?.name ?? "Unknown"}
      </p>

      <p>
        <strong>⭐ Ability:</strong>{" "}
        {pokemon.pokemon?.abilities?.[0]?.ability?.name ?? "Unknown"}
      </p>

      <p>
        <strong>🌍 Habitat:</strong>{" "}
        {pokemon.species?.habitat ? pokemon.species.habitat.name : "Unknown"}
      </p>

      <p>
        <strong>🎨 Color:</strong>{" "}
        {pokemon.species?.color?.name || "Unknown"}
      </p>

      <p>
        <strong>🧬 Generation:</strong>{" "}
        {pokemon.species?.generation?.name || "Unknown"}
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