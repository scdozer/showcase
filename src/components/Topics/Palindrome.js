import React, { Component } from 'react';

class Palindrome extends Component {

  constructor(){
    super();
    this.state={
      userInput: '',
      palindrome: ''
    }
  }

  handleInput (val) {
    this.setState({ userInput: val });
  }

  isPalendrome(userInput){
    var original = userInput;
    var reverse = userInput;
    reverse = reverse.split('');
    reverse = reverse.reverse();
    reverse = reverse.join('');

    if (original === reverse){
      this.setState({ palindrome: 'True'})
    }
    else {this.setState({ palindrome: 'False'})}
  }

  render(){
    return(
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange= {(e) => this.handleInput(e.target.value)}></input>
        <button className="confirmationButton" onClick = {() => this.isPalendrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;
