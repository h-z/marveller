import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="SearchFilter">
          <input type="text" value="" />
        </div>
        <div className="SearchResults">
          <ul>
            <li>first</li>
            <li>second</li>
            <li className="selected">third</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
