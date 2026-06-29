import "./BanList.css";

function BanList({ list, onRemoveItem }) {
  return (
    <div className="ban-list">
      <div className="ban-list-header">
        <span className="pokeball-icon" aria-hidden="true"></span>
        <h3>Containment Zone</h3>
      </div>

      <p className="ban-list-subtitle">
        Click a badge to release it back into the wild.
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
