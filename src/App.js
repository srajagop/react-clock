import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock/Clock';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock message="I am a clock"/>
      </div>
    );
  }
}

export default App;
