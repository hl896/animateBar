import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bars/Bar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar value_status1st='20'
            value_status2nd='50'
            value_status3th='80'>

        </Bar> 
      </div>
    );
  }
}

export default App;
