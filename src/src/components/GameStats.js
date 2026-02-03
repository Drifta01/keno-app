import React from 'react';
import '../styles/GameStats.css';

const GameStats = ({ selectedCount, matchCount, gameActive }) => {
  const matchPercentage =
    selectedCount > 0 ? Math.round((matchCount / selectedCount) * 100) : 0;

  return (
    <div className="game-stats">
      <div className="stat-item">
        <span className="stat-label">Numbers Selected:</span>
        <span className="stat-value">{selectedCount}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Matches:</span>
        <span className="stat-value match">{matchCount}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Match Rate:</span>
        <span className="stat-value">{matchPercentage}%</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Game Status:</span>
        <span className={`stat-value ${gameActive ? 'active' : 'inactive'}`}>
          {gameActive ? 'Active' : 'Waiting'}
        </span>
      </div>
    </div>
  );
};

export default GameStats;
