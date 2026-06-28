import PokemonCard from "./components/PokemonCard";
import BanList from "./components/BanList";
import History from "./components/History";
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [banList, setBanList] = useState([]);

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

  const handleAddToBanList = (attribute) => {
    if (!banList.includes(attribute)) {
      setBanList([...banList, attribute]);
      console.log(`Added ${attribute} to the ban list:`); 
    }
  }

  return (
    <div className="app">
      <h1>🧪 Professor Oak's Discovery Lab</h1>

      <p>
        Help Professor Oak catalog Pokémon from every region!
      </p>

      <button onClick={getPokemon}>
        🔍 Discover Pokémon
      </button>

      <PokemonCard pokemon={pokemon} onAttributeClick={handleAddToBanList} />

      <BanList />

      <History />
    </div>
  );
}

export default App;