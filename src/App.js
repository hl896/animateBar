import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bars/Bar';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:null
    }
  }

  componentDidMount() {
    fetch('http://pb-api.herokuapp.com/bars')
      .then(response => response.json())
      .then(data => this.setState({ data }));
    
  }
  render() {
    console.log('datas:'+this.state.data);
    return (
      <div className="App">
        <Bar value_status1st='60'
            value_status2nd='50'
            value_status3th='80'
            
            >

        </Bar> 
      </div>
    );
  }
}

export default App;
