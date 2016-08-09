import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Marveller</h2>
        </div>
        <Search marveller={this.props.marveller} />
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
