import React, { Component } from 'react';

class EvenAndOdd extends Component{

  constructor(){
    super();
    this.state = {
      evenArray:[],
      oddArray:[],
      userInput: ''
    }
  }

  handleChange(val){
    this.setState({userInput: val});
  }

  assignEvenAndOdds(userInput){
    var evens = [];
    var odds = [];

    for(var i = 0; i<userInput.length; i++){
      if(userInput[i] % 2 === 0){
        evens.push(parseInt(userInput[i], 10));
      }
      else if(userInput[i] === ','){
        //do nothing
      }
      else{
        odds.push(parseInt(userInput[i], 10));
      }
    }
    this.setState({
      evenArray: evens,
      oddArray: odds
    })
  }

  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}


export default EvenAndOdd;
