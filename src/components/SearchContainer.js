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
    this.setState({ searchInput: input.toLowerCase() });
  }

  render(){
    return(
      <div className="main-container">
        <Header onInputChange={this.handleChange}/>
        <List searchTerm={this.state.searchInput} />
        <p className="logo">&copy; <span className="pinkText">Glorious</span> Web Design</p>
      </div>
    )
  }
}
