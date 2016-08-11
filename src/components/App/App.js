import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import RelatedComics from '../RelatedComics/RelatedComics';
import logo from './marvel-logo.jpg';
import loading from './loading.svg';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: null,
      busy: false,
      comics: []
    };
    this.handleSelected = this.handleSelected.bind(this);
    this.props.marveller.handleBusiness(this.handleBusiness.bind(this));
  }

  handleBusiness(busy) {
    this.setState({busy: busy});
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
    var busy = '';
    if (this.state.busy) {
      busy = (<img src={loading} alt="busy" className="loading"/>);
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Marveller" />
          <p>{busy}</p>
        </div>
        <Search marveller={this.props.marveller} handleSelected={this.handleSelected}/>
        <RelatedComics character={this.state.selected} comics={this.state.comics} />
      </div>
    );
  }
}

export default App;
