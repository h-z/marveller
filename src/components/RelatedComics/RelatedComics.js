import React, { Component } from 'react';
// import './RelatedComics.css';
import Comic from '../Comic/Comic';

class RelatedComics extends Component {
  getDates(comic) {
    var dates = {};
    comic.dates.forEach(function (date) {
      dates[date.type] = new Date(Date.parse(date.date));
    });
    return dates;
  }

  render() {
    var results = [];
    var self = this;
    this.props.comics.forEach(function (result) {
      // var dates = self.getDates(result);
      results.push(<Comic key={'comic-' + result.id} comic={result}/>);
      // console.info(dates);
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
