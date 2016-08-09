import React, { Component } from 'react';
import './SearchFilter.css';

class SearchFilter extends Component {
  render() {
    return (
      <div className="SearchFilter">
        <input type="text" onChange={this.props.handler}/>
      </div>
    );
  }
}

export default SearchFilter;
