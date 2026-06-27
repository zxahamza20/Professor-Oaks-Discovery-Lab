import "./App.css";

function App() {
  return (
    <div className="app">

      <h1>🎲 PokéDiscover</h1>

      <p>
        Discover random Pokémon while building your own ban list!
      </p>

      <button>
        Discover!
      </button>

      <div className="pokemon-card">
        Pokemon will appear here
      </div>

      <div className="ban-list">
        <h2>Ban List</h2>
      </div>

      <div className="history">
        <h2>History</h2>
      </div>

    </div>
  );
}

export default App;