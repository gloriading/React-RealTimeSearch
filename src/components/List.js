import React, { Component } from 'react';

export default class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: [],
      isLoad: true
     }
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://uinames.com/api/?amount=25&gender=female&region=canada')
    .then(response => response.json())
    .then(data => {
      this.setState({
        people: data,
        isLoad: false
       })
    })
  }

  render(){
    let list, filteredList;
    filteredList = this.state.people.filter(person => {
      return person.name.toLowerCase().indexOf(this.props.searchTerm) !== -1
    })

    list = filteredList.map( person => {
      return <li key={person.id}>{person.name}</li> ;
    })

    if(this.state.isLoad){
      return <div className="list-container">Loading...</div>;
    }else{
      return(
        <div className="list-container">
          <ul>
          {list}
          </ul>
        </div>
      );
    }
  }
}
