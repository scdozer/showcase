import React, { Component } from 'react';

class FilterObject extends Component {

  consturctor(){
    super();
    this.state={
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Scrader',
          age: '24',
          hairColor: 'brown'
        }
        {
          name: 'Carly Armstrong',
          title: 'CEO'
        }
      ],

      userInput:'',
      filteredEmployees:[]
    }
  }
  render(){
    return(
      <div className="puzzleBox filterObjecPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input className="inputLine"></input>
        <button className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB"></span>
      </div>
    )
  }
}

export default FilterObject;
