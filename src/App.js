import './index.scss';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const countMinus = () =>{
    setCount (count - 1 );
  }
  const countPlus = () =>{
    setCount (count + 1 );
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={countMinus} className="minus">- Минус</button>
        <button onClick={countPlus} className="plus">Плюс +</button>
        <button  className="plus">Умножить *</button>
      </div>
    </div>
  );
}

export default App;
