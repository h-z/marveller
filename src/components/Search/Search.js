import React, { Component } from 'react';
import './Search.css';
import SearchFilter from './SearchFilter';
import Character from '../Character/Character';

import _ from 'lodash';

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      lastQuery: '',
      results: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.delayedTimer = null;
  }

  handleSearch(event) {
    var self = this;
    var str = event.target.value;
    var query = {
      nameStartsWith: str,
      limit: 10
    };
    this.setState({lastQuery: str});
    if ('' === str) {
      self.setState({results: []});
    } else {
      clearTimeout(this.delayedTimer);
      this.delayedTimer = setTimeout(function() {
        self.props.marveller.characters(query).then(function (data) {
          self.setState({results: data['results']});
        });
      }, 500);
    }
  }

  render() {
    var results = [];
    var self = this;
    this.state.results.forEach(function (result) {
      results.push(<Character key={'char-' + result.id} character={result} handleSelected={self.props.handleSelected}/>);
    });
    return (
      <div className="Search">
        <SearchFilter handler={this.handleSearch} query={this.state.lastQuery} />
        <div className="SearchResults">{results}</div>
      </div>
    );
  }
}

export default Search;
