import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {name:"Hi class",number: 0}
    this.id= setInterval(()=>{
      var number = this.state.number+1;
      if(number === 2){
        clearInterval(this.id)
      }
      this.setState({number:number})
    },1000)
  }
  render() {
    return (
      <div className="App">
      <LifeCycleDemo name={this.state.name+","+this.state.number}/>
      </div>
    );
  }
}

class LifeCycleDemo extends Component {
  constructor() {
    super();
    console.log("constructor")
  }
  componentDidMount() { console.log("componentDidMount") }
  componentWillMount() { console.log("componentWillMount") }
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps", newProps)
  }
  shouldComponentUpdate(){
    return false;
  }
  componentDidUpdate() { console.log("componentDidUpdate") }
  componentWillUnmount() { console.log("componentWillUnmount") }
  componentWillUpdate() { console.log(" componentWillUpdate") }

  render(){
    console.log("REnder")
    return(
      <h2>{this.props.name}</h2>
    )
  }
}

export default App;
