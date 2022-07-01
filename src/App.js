import './App.css';
import { useState } from 'react';
import React from 'react';
import LinkResult from './LinkResult';
import BackgroundAnimate from './BackgroundAnimate';
import HomePage from './pages/HomePage';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <HomePage setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;

