import React, {Fragment} from 'react';
import './App.css';
import Hero from './Components/Hero'
import Section from './Components/Section'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
         
          <Hero />
          <Section />
         
        </div>
      </header>
    </div>
  );
}

export default App;
