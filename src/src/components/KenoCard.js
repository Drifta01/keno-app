import React from 'react';
import '../styles/KenoCard.css';

const KenoCard = ({ selectedNumbers, onNumberSelect, drawnNumbers }) => {
  const kenoNumbers = Array.from({ length: 80 }, (_, i) => i + 1);

  const isNumberDrawn = (num) => drawnNumbers.includes(num);
  const isNumberSelected = (num) => selectedNumbers.includes(num);

  const handleNumberClick = (num) => {
    if (onNumberSelect) {
      onNumberSelect(num);
    }
  };

  return (
    <div className="keno-card">
      <h2>Keno Card</h2>
      <div className="numbers-grid">
        {kenoNumbers.map((num) => (
          <button
            key={num}
            className={`number-button ${isNumberSelected(num) ? 'selected' : ''} ${
              isNumberDrawn(num) ? 'drawn' : ''
            }`}
            onClick={() => handleNumberClick(num)}
            disabled={isNumberDrawn(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KenoCard;
