import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>PROJECT</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
