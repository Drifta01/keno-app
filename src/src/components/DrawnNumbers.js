import React from 'react';
import '../styles/DrawnNumbers.css';

const DrawnNumbers = ({ numbers, loading }) => {
  return (
    <div className="drawn-numbers">
      <h2>Drawn Numbers ({numbers.length})</h2>
      {loading && <p className="loading">Fetching numbers...</p>}
      <div className="numbers-display">
        {numbers.length === 0 ? (
          <p className="no-numbers">No numbers drawn yet</p>
        ) : (
          numbers.map((num) => (
            <div key={num} className="drawn-number">
              {num}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DrawnNumbers;
