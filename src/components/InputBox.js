import React, { Component } from 'react';

export default class InputBox extends Component {
  constructor(props){
    super(props);
    this.state = { searchInput: "" };
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e){
    // use the `callback in setState` prevents delay 1 character problem
    this.setState({ searchInput: e.target.value}, ()=> {
      this.props.onInputChange(this.state.searchInput)
    });
  }

  render(){
    return(
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="type here to search"
          onChange={this.handleChange}
         />
      </div>
    )
  }
}
