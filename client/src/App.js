import React from 'react';
import Api from '../src/components/Api.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Api /> 
    </div>
  );
}

export default App;
