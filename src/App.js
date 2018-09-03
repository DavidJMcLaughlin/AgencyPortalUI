import React, { Component } from 'react';
import DashboardNavBar from './components/DashboardNavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardNavBar />
        Hello world
      </div>
    );
  }
}

export default App;
