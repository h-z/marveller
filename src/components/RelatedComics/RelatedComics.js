import React, { Component } from 'react';
// import './RelatedComics.css';
import Comic from '../Comic/Comic';

class RelatedComics extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var results = [];
    this.props.comics.forEach(function (result) {
      results.push(<Comic key={'comic-' + result.id} comic={result} />);
    });
    return (
      <div className="RelatedComics">
        {results}
        <div className="RelatedTimeline">
        </div>
      </div>
    );
  }
}

export default RelatedComics;
