import React, { Component } from 'react';

export default class InputBox extends Component {
  render(){
    return(
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="type here to search" />
      </div>
    )
  }
}
