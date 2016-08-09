import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Marveller</h2>
        </div>
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
        <div className="RelatedTimeline">
          <ul>
            <li>first</li>
            <l>second</l>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
