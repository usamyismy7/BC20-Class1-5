import React from 'react';
import { useState, useContext, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './Components/Context';
import Reducer from './Components/Reducer';

function App({ name }) {
  const [isLit, setLit] = useState(true);
  const [count, setCount] = useState(0);

  function Lit() {
    console.log('Switch pressed!');
    setLit(!isLit);
  }

  function Increment() {
    console.log('Increment pressed!');
    // eslint-disable-next-line no-const-assign
    setCount(count+1);
  }

  function Decrement() {
    console.log('Decrement pressed!');
    // eslint-disable-next-line no-const-assign
    setCount(count-1);
  }

  let age = useContext(Context);

  const [ state, dispatch ] = useReducer(Reducer, 0);

  return (
    <Context.Provider value={age}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Name: {name}; Age: {age} years; </p>
          <p>Room Switch is {isLit ? 'ON' : 'OFF'}</p>
          <p>Room is Lit: {JSON.stringify(isLit)}</p>
          <p>Count: {count}</p>
          <button className="button" onClick={Lit}>Switch</button>
          <div className={"room_"+(isLit ? "lit" : "dark")}>
            Room
          </div>
          <button className="button" onClick={Increment}>Increment</button>
          <button className="button" onClick={Decrement}>Decrement</button>
          <br></br>
          <h2>Reducer</h2>
          <p>Count: {state}</p>
          <button className="button" onClick={()=>dispatch({type: 'INCREMENT', val: 4})}>Increment</button>
          <button className="button" onClick={()=>dispatch({type: 'DECREMENT', val: 2})}>Decrement</button>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
