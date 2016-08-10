import React, { Component } from 'react';
// import './RelatedComics.css';
import Comic from '../Comic/Comic';
import Timeline from './Timeline';
import _ from 'lodash';

class RelatedComics extends Component {
  getDates(comic) {
    var dates = {};
    comic.dates.forEach(function (date) {
      dates[date.type] = new Date(Date.parse(date.date));
    });
    return dates;
  }

  extractDates(comics) {
    var data = {};
    var self = this;
    var years = comics.map(function(comic) {
      return self.getDates(comic)['onsaleDate'].getFullYear();
    });
    _.range(_.min(years), _.max(years)+1).forEach(function (d) {
      data[d] = 0;
    });
    years.forEach(function (year) {
      if (year % 1 === 0) {
        data[year]++;
      }
    });
    return data;
  }

  render() {
    var results = [];

    this.props.comics.forEach(function (result) {
      results.push(<Comic key={'comic-' + result.id} comic={result}/>);
    });
    return (
      <div className="RelatedComics">
        <Timeline data={this.extractDates(this.props.comics)}/>
        <div className="comics">{results}</div>
      </div>
    );
  }
}

export default RelatedComics;
