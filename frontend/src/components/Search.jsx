import React, { Component } from "react";
import './Search.css'

export default class Search extends Component {
  
  render() {
    return (
      <header className="heading">
        <input className="input__search" type="text" onChange={this.props.updateSearchedValue} placeholder=" &#128269;   Search Notes" />
      </header>
    );
  }
}
