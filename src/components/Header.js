import React, { Component } from 'react';
import {Title} from './Title';
import InputBox from './InputBox';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.sendInput = this.sendInput.bind(this);
  }

  sendInput(input){
    this.props.onInputChange(input);
  }

  render(){
    return(
      <div className="header">
        <Title />
        <InputBox onInputChange={this.sendInput}/>
      </div>

    )
  }
}
