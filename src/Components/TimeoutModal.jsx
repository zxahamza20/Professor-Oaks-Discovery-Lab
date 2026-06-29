import "./TimeoutModal.css";

function TimeoutModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pokeball-bg">
          <div className="pokeball-top"></div>
          <div className="pokeball-middle">
            <div className="pokeball-button"></div>
          </div>
          <div className="pokeball-bottom"></div>
        </div>

        <div className="modal-text">
          <div className="modal-icon">🔬</div>
          <h2>Professor Oak's Search Timed Out!</h2>
          
          <div className="modal-message">
            <p>You've banned too many attributes to find a match quickly.</p>
            <p className="modal-suggestion">Try unbanning a few traits to continue your research!</p>
          </div>

          <div className="modal-stats">
            <div className="stat-item">
              <span className="stat-label">⚠️ Banned Attributes</span>
              <span className="stat-value">Too Many!</span>
            </div>
          </div>

          <button className="modal-button" onClick={onClose}>
            <span className="button-icon">✓</span> 
            Release Some Pokémon
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimeoutModal;