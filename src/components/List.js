import React, { Component } from 'react';

const boys = [
  { name: "Alex", age: 2 },
  { name: "Benny", age: 5 },
  { name: "Calvin", age: 3 },
  { name: "Dominion", age: 2 },
  { name: "Elvis", age: 4 },
];

export default class List extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let list, filteredList;
    filteredList = boys.filter(boy => {
      return boy.name.toLowerCase().indexOf(this.props.searchTerm) != -1
    })
    
    list = filteredList.map( boy => {
      return <li key={boy.name}>{boy.name} - {boy.age} years old</li> ;
    })

    return(
      <div className="list-container">
        <ul>In List</ul>
        {list}
      </div>
    )
  }
}
