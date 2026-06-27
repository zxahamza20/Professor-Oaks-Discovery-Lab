import { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    const randomID = Math.floor(Math.random() * 1025) + 1;

    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomID}`
      );
      const pokemonData = await pokemonResponse.json();

      const speciesResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${randomID}`
      );
      const speciesData = await speciesResponse.json();

      setPokemon({
        pokemon: pokemonData,
        species: speciesData,
      });
    } catch (error) {
      console.log("Error fetching Pokémon:", error);
    }
  };

  return (
    <div className="app">
      <h1>🧪 Professor Oak's Discovery Lab</h1>

      <p>
        Help Professor Oak catalog Pokémon from every region!
      </p>

      <button onClick={getPokemon}>
        🔍 Discover Pokémon
      </button>

      <div className="pokemon-card">
        {pokemon ? (
          <>
            <h2>{pokemon.pokemon.name.toUpperCase()}</h2>

            <img
              src={
                pokemon.pokemon.sprites.other["official-artwork"]
                  .front_default
              }
              alt={pokemon.pokemon.name}
            />

            <p>
              <strong>🔥 Type:</strong>{" "}
              {pokemon.pokemon.types[0].type.name}
            </p>

            <p>
              <strong>⭐ Ability:</strong>{" "}
              {pokemon.pokemon.abilities[0].ability.name}
            </p>

            <p>
              <strong>🌍 Habitat:</strong>{" "}
              {pokemon.species.habitat
                ? pokemon.species.habitat.name
                : "Unknown"}
            </p>

            <p>
              <strong>❤️ Base HP:</strong>{" "}
              {pokemon.pokemon.stats[0].base_stat}
            </p>

            <p>
              <strong>📏 Height:</strong>{" "}
              {pokemon.pokemon.height}
            </p>

            <p>
              <strong>⚖️ Weight:</strong>{" "}
              {pokemon.pokemon.weight}
            </p>
          </>
        ) : (
          <>
            <h2>🧑‍🔬 Professor Oak says...</h2>

            <p>
              Click <strong>Discover Pokémon</strong> to begin your research
              adventure!
            </p>
          </>
        )}
      </div>

      <div className="ban-list">
        <h2>Ban List</h2>
      </div>

      <div className="history">
        <h2>Research History</h2>
      </div>
    </div>
  );
}

export default App;