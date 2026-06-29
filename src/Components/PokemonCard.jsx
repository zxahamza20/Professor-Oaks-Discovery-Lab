import "./PokemonCard.css";

// Official-ish type colors, used as the card's accent (border, art-frame glow,
// attribute buttons) so every card reads like its own TCG "energy" color.
const TYPE_COLORS = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

function PokemonCard({ pokemon, onAttributeClick }) {
  if (!pokemon || !pokemon.species) {
    return (
      <div className="pokemon-card pokemon-card--empty">
        <div className="card-empty-art">🔬</div>
        <h2>Professor Oak says...</h2>
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
  const hp = pokemon.pokemon?.stats?.[0]?.base_stat;
  const accent = TYPE_COLORS[type] || "#8a8a8a";

  return (
    <div className="pokemon-card" style={{ "--type-color": accent }}>
      <div className="card-header">
        <h2 className="card-name">{pokemon.pokemon?.name?.toUpperCase()}</h2>
        <div className="card-hp">
          <span className="hp-label">HP</span>
          <span className="hp-value">{hp ?? "??"}</span>
        </div>
      </div>

      <div className="card-art-frame">
        {pokemon.pokemon?.sprites?.other?.["official-artwork"]?.front_default ? (
          <img
            src={pokemon.pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.pokemon.name}
          />
        ) : (
          <div className="card-art-missing">No image found</div>
        )}
      </div>

      <div className="card-stats">
        <div className="attr-row">
          <span className="attr-label">🔥 Type</span>
          {type ? (
            <button className="attr-btn" onClick={() => onAttributeClick(type)}>
              {type}
            </button>
          ) : (
            <span className="attr-unknown">Unknown</span>
          )}
        </div>

        <div className="attr-row">
          <span className="attr-label">⭐ Ability</span>
          {ability ? (
            <button className="attr-btn" onClick={() => onAttributeClick(ability)}>
              {ability}
            </button>
          ) : (
            <span className="attr-unknown">Unknown</span>
          )}
        </div>

        <div className="attr-row">
          <span className="attr-label">🌍 Habitat</span>
          <button
            className="attr-btn"
            onClick={() => onAttributeClick(habitat ? habitat : "Unknown")}
          >
            {habitat ? habitat : "Unknown"}
          </button>
        </div>

        <div className="attr-row">
          <span className="attr-label">🎨 Color</span>
          {color ? (
            <button className="attr-btn" onClick={() => onAttributeClick(color)}>
              {color}
            </button>
          ) : (
            <span className="attr-unknown">Unknown</span>
          )}
        </div>

        <div className="attr-row">
          <span className="attr-label">🧬 Generation</span>
          {generation ? (
            <button className="attr-btn" onClick={() => onAttributeClick(generation)}>
              {generation}
            </button>
          ) : (
            <span className="attr-unknown">Unknown</span>
          )}
        </div>
      </div>

      <div className="card-footer">
        <span>📏 Height: {pokemon.pokemon?.height}</span>
        <span className="footer-divider">•</span>
        <span>⚖️ Weight: {pokemon.pokemon?.weight}</span>
      </div>
    </div>
  );
}

export default PokemonCard;
