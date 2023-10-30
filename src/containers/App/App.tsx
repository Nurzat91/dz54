import React, { useState } from 'react';
import './App.css';

interface Cell {
  hasItem: boolean;
  clicked: boolean;
}

function createItems() {
  const cells: Cell[] = [];

  for (let i = 0; i < 36; i++) {
    cells.push({ hasItem: false, clicked: false });
  }

  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].hasItem = true;

  return cells;
}

function App() {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
  };

  const onItemClick = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], clicked: true };
    setItems(updatedItems);
    setAttempts(attempts + 1);
  };

  return (
    <div>
      <div className="game-container">
        {items.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell.clicked ? (cell.hasItem ? 'has-item' : '') : ''}`}
            onClick={() => onItemClick(index)}
          >
            {cell.clicked ? (cell.hasItem ? 'O' : '') : ''}
          </div>
        ))}
      </div>
      <div className="info">
        <p>Количество попыток: {attempts}</p>
        <button onClick={resetGame}>Сброс</button>
      </div>
    </div>
  );
}

export default App;

