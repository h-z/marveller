import React, { Component } from 'react';
import './Timeline.css';
import _ from 'lodash';

// import { BarChart } from 'rd3';
import BarChart from '../Chart/BarChart';

class Timeline extends Component {

  createChartData(data, name) {
    return _.map(data, function (value, year) {
      return {title: year, value: value}
    });
  }

  render() {
    if (0 === _.values(this.props.data).length) {
      return (<div className="Timeline"></div>);
    }
    var data = this.createChartData(this.props.data, 'Issues/year');
    return (
        <BarChart
          data={data}
          width={960}
          height={200}
          fill={'cornflowerblue'}
          onClick={console.info}
        />
    );
  }
}

export default Timeline;