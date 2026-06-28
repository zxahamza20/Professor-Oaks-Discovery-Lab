import PokemonCard from "./components/PokemonCard";
import BanList from "./components/BanList";
import History from "./components/History";
import { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  const getPokemon = async () => {
    let keepLooking = true;
    let attempts = 0;
    const maxAttempts = 30; 
    
    while (keepLooking && attempts < maxAttempts) {
      attempts++; 
      
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

        const type = pokemonData?.types?.[0]?.type?.name;
        const ability = pokemonData?.abilities?.[0]?.ability?.name;
        const habitat = speciesData?.habitat ? speciesData.habitat.name : "Unknown"; 
        const color = speciesData?.color?.name;
        const generation = speciesData?.generation?.name;

        const isBanned = 
          banList.includes(type) ||
          banList.includes(ability) ||
          banList.includes(habitat) ||
          banList.includes(color) ||
          banList.includes(generation);

        if (!isBanned) {
          const newPokemon = {
            pokemon: pokemonData,
            species: speciesData,
          };

          setPokemon(newPokemon);
          setHistory((prevHistory) => [newPokemon, ...prevHistory]);

          keepLooking = false; 
        } else {
          console.log(`⚠️ Skipped ${pokemonData.name.toUpperCase()} due to a banned attribute.`);
        }

      } catch (error) {
        console.log("Error fetching Pokémon:", error);
        keepLooking = false; 
      }
    }

    if (attempts >= maxAttempts) {
      alert("❌ Professor Oak's search timed out! You've banned too many attributes to find a match quickly. Try unbanning a few traits.");
    }
  };

  const handleAddToBanList = (attribute) => {
    if (!banList.includes(attribute)) {
      setBanList([...banList, attribute]);
    }
  };

  const handleRemoveFromBanList = (attributeToRemove) => {
    setBanList(banList.filter((item) => item !== attributeToRemove));
  };

  const handleSelectPastPokemon = (pastPokemon) => {
    setPokemon(pastPokemon);
  };

  return (
    <div className="app">
      <h1>🧪 Professor Oak's Discovery Lab</h1>

      <p>Help Professor Oak catalog Pokémon from every region!</p>

      <button onClick={getPokemon}>🔍 Discover Pokémon</button>

      <div className="main-layout">
        <History historyLog={history} onHistoryItemClick={handleSelectPastPokemon} />
        <PokemonCard pokemon={pokemon} onAttributeClick={handleAddToBanList} />
        <BanList list={banList} onRemoveItem={handleRemoveFromBanList} />
      </div>
    </div>
  );
}

export default App;