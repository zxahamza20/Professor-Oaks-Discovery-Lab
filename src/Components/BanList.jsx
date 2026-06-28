import "./BanList.css";

function BanList({ list, onRemoveItem }) {
  return (
    <div className="ban-list">
      <h3>🚫 Containment Zones (Ban List)</h3>

      <p className="ban-list-subtitle">
        Click an attribute to unban and discovver more of the type!
      </p>

      {list.length === 0 ? (
        <p className="empty-msg">No attributes are currently banned.</p>
      ) : (
        <div className="ban-badges-container">
          {list.map((attribute, index) => (
            <button
              key={index}
              className="ban-badge"
              onClick={() => onRemoveItem(attribute)}
              title="Click to remove"
            >
              {attribute} <span className="remove-x">×</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BanList;