import React, { Component } from  'react';

class Sum extends Component{

  constructor(){
    super();
    this.state = {
      num1: 0,
      num2: 0,
      total: null
    }
  }

  updateNumber1(userInput){
    this.setState({num1: Number(userInput)});
  }

  updateNumber2(userInput){
    this.setState({num2: Number(userInput)});
  }

  calculateSum(num1, num2){
    this.setState({total: (num1 + num2)})
  }

  render(){
    return(
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={(e) => this.updateNumber1(e.target.value)}></input>
        <input className="inputLine" type="number" onChange={(e) => this.updateNumber2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.calculateSum(this.state.num1, this.state.num2)}> Add </button>
        <span className="resultsBox">{this.state.total}</span>
      </div>
    )
  }
}

export default Sum;
