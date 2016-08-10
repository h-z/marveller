import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import RelatedComics from '../RelatedComics/RelatedComics';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: null,
      comics: []
    };
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(item) {
    this.setState({selected: item});
    var self = this;
    var query = {
      characters: item.id,
      orderBy: 'onsaleDate'
    };
    self.setState({comics: []});
    this.props.marveller.comics(query).then(function (data) {
      self.setState({comics: self.state.comics.concat(data['results'])});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Marveller</h2>
        </div>
        <Search marveller={this.props.marveller} handleSelected={this.handleSelected}/>
        <RelatedComics character={this.state.selected} comics={this.state.comics} />
      </div>
    );
  }
}

export default App;
