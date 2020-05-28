import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [unlocks, setUnlocks] = useState(0);
  const [lastIncrement, setLastIncrement] = (useState(0));
  const processClick = (i: number) => {
    setCount(count + i);
  }

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  const getHeaderColor = (index: number, min: number) => {
    if (count < min) return "";
    const colorIndex = ((offset + index) % unlocks);
    return colors[colorIndex];
  }

  const getCounterStyles = () => {
    if (count > 50 * (unlocks + 1)) {
      if (unlocks < 7) {
        setUnlocks(unlocks + 1);
      }
    }

    if (!(count % 10) && lastIncrement != count) {
      setLastIncrement(count);
      setOffset(offset+1);
    }
    let colorClass = '';
    
    if (count > 50) {
      colorClass = colors[Math.min(Math.floor((count-50) / 50), colors.length-1)];
    }

    let pop = ''
    if (count > 50 && count % 50 < 25) {
      pop = 'pop'
    }


    return `${colorClass} ${pop}`
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span className={getHeaderColor(1, 50)}>C</span>
          <span className={getHeaderColor(2, 100)}>l</span>
          <span className={getHeaderColor(3, 150)}>i</span>
          <span className={getHeaderColor(4, 200)}>c</span>
          <span className={getHeaderColor(5, 250)}>k</span>
          <span className={getHeaderColor(6, 300)}>e</span>
          <span className={getHeaderColor(7, 350)}>r</span>
          </h1>
      </header>
      <div id="count" className={getCounterStyles()}>{count}</div>
      <button onClick={() => processClick(1)}>Click Me</button>
    </div>
  );
}

export default App;
