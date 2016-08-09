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
    this.throttledSearch = _.throttle(this.props.marveller.characters, 500).bind(this.props.marveller);
  }

  handleSearch(event) {
    var self = this;
    var query = {
      nameStartsWith: event.target.value,
      limit: 10
    };
    this.setState({lastQuery: event.target.value});
    this.throttledSearch(query).then(function (data) {
      console.info(data);
      self.setState({results: data['results']});
    });
  }

  render() {
    var results = [];
    var self = this;
    this.state.results.forEach(function (result) {
      results.push(<Character key={result.id} character={result} handleSelected={self.props.handleSelected}/>);
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
