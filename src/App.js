import React, { Component } from 'react';
import {Router, Link} from '@reach/router';
import logo from './logo.svg';
import './App.css';
import Home from './Home/HomeContainer';
import About from './About/AboutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>PROJECT</h1>
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <Router>
          <Home path="/"/>
          <About path="/about"/>
        </Router>
      </div>
    );
  }
}

export default App;
