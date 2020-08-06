import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Hero />
        </div>

      </header>
    </div>
  );
}

export default App;
