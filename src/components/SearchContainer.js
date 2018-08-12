import React, { Component } from 'react';
import Header from './Header';
import List from './List';

export default class SearchContainer extends Component {
  constructor(props){
    super(props);
    this.state = { searchInput: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input){
    this.setState({ searchInput: input });
  }

  render(){
    return(
      <div className="main-container">
        <Header onInputChange={this.handleChange}/>
        <h3>{this.state.searchInput}</h3>
        <List />
      </div>
    )
  }
}
