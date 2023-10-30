import { useState } from 'react';
import './App.css';

interface Cell {
  hasItem: boolean;
  clicked: boolean;
  white: boolean;
}

function App() {
  const  createItems = () => {
    const cells: Cell[] = [];

    for (let i = 0; i < 36; i++) {
      cells.push({ hasItem: false, clicked: false, white: false });
    }

    const randomIndex = Math.floor(Math.random() * cells.length);
    cells[randomIndex].hasItem = true;

    return cells;
  }

  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);
  const [found, setFound] = useState(false);
  const [message, setMessage] = useState('');

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
    setFound(false);
    setMessage('');
  };

  const onItemClick = (index: number) => {
    if (!found) {
      const updatedItems = [...items];
      updatedItems[index] = { ...updatedItems[index], clicked: true, white: true };
      setItems(updatedItems);
      setAttempts(attempts + 1);

      if (items[index].hasItem) {
        setFound(true);
        setMessage('Эмоджи найдено! Нажмите "Сброс", чтобы начать заново.');
      }
    }
  };

  return (
    <div>
      <div className="game-container">
        {items.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell.clicked ? (cell.hasItem ? 'has-item' : '') : ''} ${cell.white ? 'white' : ''}`}
            onClick={() => onItemClick(index)}
          >
            {cell.clicked ? (cell.hasItem ? '❤️' : '') : ''}
          </div>
        ))}
      </div>
      <div className="info">
        <p>Количество попыток: {attempts}</p>
        <p>{message}</p>
        <button onClick={resetGame}>Сброс</button>
      </div>
    </div>
  );
}

export default App;

