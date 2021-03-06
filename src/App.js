import React from 'react';
import logo from './logo.svg';
// import BaseUseDemo from './components/baseUse';
// import AdvancedUseDemo from './components/advancedUse';
import ReduxDemo from './components/redux';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <BaseUseDemo /> */}
        {/* <AdvancedUseDemo /> */}
        <ReduxDemo />
      </header>
    </div>
  );
}

export default App;
