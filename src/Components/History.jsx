function History({ historyLog, onHistoryItemClick }) {
  return (
    <div className="history">
      <h3>📜 Research Log (History)</h3>
      <p className="ban-list-subtitle" style={{ color: '#555' }}>
        Click any previously found Pokémon to review its attributes again!
      </p>
      
      {!historyLog || historyLog.length === 0 ? (
        <p className="empty-msg">No Pokémon have been discovered in this session yet.</p>
      ) : (
        <div className="history-grid">
          {historyLog.map((item, index) => {
            const name = item.pokemon?.name;
            const sprite = item.pokemon?.sprites?.front_default;

            return (
              <button 
                key={index} 
                className="history-item-btn"
                onClick={() => onHistoryItemClick(item)}
                title={`Review ${name?.toUpperCase()}`}
              >
                {sprite && <img src={sprite} alt={name} className="history-sprite" />}
                <p className="history-name">{name?.toUpperCase()}</p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;