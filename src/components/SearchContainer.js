import React, { Component } from 'react';
import Header from './Header';
import List from './List';

export default class SearchContainer extends Component {

  render(){
    return(
      <div className="main-container">
        <Header />
        <List />
      </div>
    )
  }
}
