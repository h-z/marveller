import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: null
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(item) {
    this.setState({selected: item});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Marveller</h2>
        </div>
        <Search marveller={this.props.marveller} handleSelected={this.handleSelected}/>
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
