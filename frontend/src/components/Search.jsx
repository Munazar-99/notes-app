import React, { Component } from "react";
import './Search.css'

export default class Search extends Component {
  
  render() {
    return (
      <header className="heading">
        {/* Input field for searching notes */}
        <input className="input__search" type="text" onChange={this.props.updateSearchedValue} placeholder=" &#128269;   Search Notes" />
      </header>
    );
  }
}
