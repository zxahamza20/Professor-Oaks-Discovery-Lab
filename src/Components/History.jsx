function History({ historyLog }) {
  return (
    <div className="history">
      <h3>📜 Research Log (History)</h3>

      {!historyLog || historyLog.length === 0 ? (
        <p className="empty-msg"> No Pokémon have been cataloged yet! </p>
      ) : (
        <div className="history-grid">
          {historyLog.map((item, index) => {
            const name = item.pokemon?.name;
            const sprite = item.pokemon?.sprites?.front_default;

            return (
              <div key={index} className="history-item">
                {sprite && <img src={sprite} alt={name} className="history-sprite" />}
                <p className="history-name">{name?.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default History;