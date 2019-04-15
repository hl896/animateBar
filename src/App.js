import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bars/Bar';
import { parse } from 'url';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      data:null,
      isLoading:false
    }
  }
  componentDidMount() {
    const that = this;
    fetch('http://pb-api.herokuapp.com/bars')
    .then(response=>response.json()
    )
    .then(jsonStr=>{
      that.setState({
        data:jsonStr,
        isLoading:true
      });
    });
  }
  render() {
    const that = this;
    if(!that.state.isLoading){
      return(
        <div>
          isloading
        </div>
      );
    }
    else{
      const texts = (that.state.data);
      console.log('app text is:'+texts);
      return (
        <div className="App">
          <Bar 
              data={texts}
              >
          </Bar> 
          <p>{}</p>
        </div>
      );
      }
  }
}

export default App;
