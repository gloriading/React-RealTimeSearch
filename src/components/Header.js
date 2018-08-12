import React, { Component } from 'react';
import {Title} from './Title';
import InputBox from './InputBox';

export default class Header extends Component {

  render(){
    return(
      <div className="header">
        <Title />
        <InputBox />
      </div>

    )
  }
}
