function History({ historyLog, onHistoryItemClick }) {
  return (
    <div className="history">
      <h3>📜 Research Log (History)</h3>
      <p className="ban-list-subtitle" style={{ color: '#555' }}>
        Hover over a Pokémon to view its attributes, and click to restore it!
      </p>
      
      {!historyLog || historyLog.length === 0 ? (
        <p className="empty-msg">No Pokémon have been discovered in this session yet.</p>
      ) : (
        <div className="history-grid">
          {historyLog.map((item, index) => {
            const name = item.pokemon?.name;
            const sprite = item.pokemon?.sprites?.front_default;
            const type = item.pokemon?.types?.[0]?.type?.name ?? "Unknown";
            const ability = item.pokemon?.abilities?.[0]?.ability?.name ?? "Unknown";
            const habitat = item.species?.habitat ? item.species.habitat.name : "Unknown";

            return (
              <button 
                key={index} 
                className="history-item-btn-minimal"
                onClick={() => onHistoryItemClick(item)}
                title={`Review ${name?.toUpperCase()}`}
              >
                {sprite && <img src={sprite} alt={name} className="history-sprite-minimal" />}
                
                <div className="history-tooltip">
                  <h4>{name?.toUpperCase()}</h4>
                  <p><strong>🔥 Type:</strong> {type}</p>
                  <p><strong>⭐ Ability:</strong> {ability}</p>
                  <p><strong>🌍 Habitat:</strong> {habitat}</p>
                  <p><strong>🌳 Generation:</strong> {item.species?.generation?.name}</p>
                  <p><strong>❤️ Base HP:</strong> {item.pokemon.stats?.[0]?.base_stat}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;