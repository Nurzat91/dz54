import React, {useState} from 'react';
import './App.css'

interface Cell {
  hasItem: boolean;
  clicked: boolean;
}
function App() {
  const createItems = () =>{
    const cells: Cell[] = [];

    for (let i = 0; i < 36; i++) {
      cells.push({ hasItem: false, clicked: false });
    }
    return cells;
  };
  console.log(createItems());
  const cellsArray = createCellsArray();
  // const [items, setItems] = useState(createItems());

  return (
    <div>
      {cellsArray.map((cell, index) => (
        <div key={index}>
          {`Cell ${index + 1}: hasItem - ${cell.hasItem.toString()}, clicked - ${cell.clicked.toString()}`}
        </div>
      ))}
    </div>
  )
}

export default App
