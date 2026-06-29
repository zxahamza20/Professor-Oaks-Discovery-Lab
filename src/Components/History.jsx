import { useState } from "react";
import "./History.css";

function History({ historyLog, onHistoryItemClick }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item, e) => {
    setHoveredItem(item);
    updateTooltipPos(e);
  };

  const handleMouseMove = (e) => {
    if (hoveredItem) {
      updateTooltipPos(e);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const updateTooltipPos = (e) => {
    setTooltipPos({
      x: e.clientX + 15,
      y: e.clientY - 10,
    });
  };

  return (
    <div className="history">
      <h3>📜 Research Log</h3>
      <p className="history-subtitle">
        Hover to inspect, click to recall a past discovery.
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
                onMouseEnter={(e) => handleMouseEnter(item, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                title={`Review ${name?.toUpperCase()}`}
              >
                {sprite && <img src={sprite} alt={name} className="history-sprite-minimal" />}
              </button>
            );
          })}
        </div>
      )}

      {hoveredItem && (
        <div
          className="history-tooltip-fixed"
          style={{
            position: "fixed",
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(0, -50%)",
            background: "#0d1026",
            color: "#ffffff",
            border: "1px solid #4fc3f7",
            borderRadius: "8px",
            padding: "12px",
            width: "200px",
            textAlign: "left",
            boxShadow: "0 4px 15px rgba(0,0,0,0.8)",
            zIndex: 9999,
            pointerEvents: "none",
            fontSize: "11px",
            lineHeight: "1.4",
          }}
        >
          <h4 style={{ 
            margin: "0 0 8px 0", 
            fontSize: "13px", 
            color: "#4fc3f7", 
            borderBottom: "1px solid #2c3766", 
            paddingBottom: "4px",
            fontFamily: "'Fredoka', Arial, sans-serif"
          }}>
            {hoveredItem.pokemon?.name?.toUpperCase()}
          </h4>
          <p style={{ margin: "3px 0" }}>
            <strong>🔥 Type:</strong> {hoveredItem.pokemon?.types?.[0]?.type?.name ?? "Unknown"}
          </p>
          <p style={{ margin: "3px 0" }}>
            <strong>⭐ Ability:</strong> {hoveredItem.pokemon?.abilities?.[0]?.ability?.name ?? "Unknown"}
          </p>
          <p style={{ margin: "3px 0" }}>
            <strong>🌍 Habitat:</strong> {hoveredItem.species?.habitat?.name ?? "Unknown"}
          </p>
          <p style={{ margin: "3px 0" }}>
            <strong>🌳 Generation:</strong> {hoveredItem.species?.generation?.name ?? "Unknown"}
          </p>
          <p style={{ margin: "3px 0" }}>
            <strong>❤️ Base HP:</strong> {hoveredItem.pokemon?.stats?.[0]?.base_stat ?? "?"}
          </p>
        </div>
      )}
    </div>
  );
}

export default History;