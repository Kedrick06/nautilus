import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <div>
        <img src='C:\Users\bflob\Desktop\nautilus_mockup\nautilus\assets\matches.png' alt="pic"/>
          <p>Issue 079</p>
            <h1>Catalysts</h1>
            <p>Agents of change</p>
                <button>Read More</button>
          <Fragment>
          <Hero />

          </Fragment>
        </div>

      </header>
    </div>
  );
}

export default App;
