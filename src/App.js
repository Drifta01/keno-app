import React, { useState } from 'react';
import KenoCard from './components/KenoCard';
import DrawnNumbers from './components/DrawnNumbers';
import GameStats from './components/GameStats';
import { fetchDrawnNumbers } from './services/apiService';
import './App.css';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const matchCount = selectedNumbers.filter((num) =>
    drawnNumbers.includes(num)
  ).length;

  const handleNumberSelect = (num) => {
    if (gameActive) return; // Can't select during game

    setSelectedNumbers((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const handlePlayGame = async () => {
    if (selectedNumbers.length === 0) {
      alert('Please select at least one number');
      return;
    }

    setGameActive(true);
    setLoading(true);
    setDrawnNumbers([]);

    try {
      const numbers = await fetchDrawnNumbers();
      setDrawnNumbers(numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error);
      alert('Error fetching numbers from API');
    } finally {
      setLoading(false);
      setGameActive(false);
    }
  };

  const handleReset = () => {
    setSelectedNumbers([]);
    setDrawnNumbers([]);
    setGameActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎰 Keno Game</h1>
        <p>Select numbers and play!</p>
      </header>

      <div className="game-container">
        <div className="game-main">
          <KenoCard
            selectedNumbers={selectedNumbers}
            onNumberSelect={handleNumberSelect}
            drawnNumbers={drawnNumbers}
          />

          <div className="game-controls">
            <button
              onClick={handlePlayGame}
              disabled={gameActive || loading || selectedNumbers.length === 0}
              className="btn btn-play"
            >
              {loading ? 'Loading...' : 'Play Game'}
            </button>
            <button onClick={handleReset} disabled={gameActive} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>

        <div className="game-sidebar">
          <GameStats
            selectedCount={selectedNumbers.length}
            matchCount={matchCount}
            gameActive={gameActive}
          />

          <DrawnNumbers numbers={drawnNumbers} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
