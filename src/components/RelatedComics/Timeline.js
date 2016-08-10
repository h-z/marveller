import React, { Component } from 'react';
import './Timeline.css';
import _ from 'lodash';

import { BarChart } from 'react-d3';


class Timeline extends Component {

  createChartData(data) {
    return {
      name: 'Issues/year',
      values: _.map(data, function (value, year) {
        return {x: year, y: value}
      }),
    }
  }

  render() {
    var data = [this.createChartData(this.props.data)];
    return (
      <div className="Timeline">
        <BarChart
          data={data}
          width={500}
          height={200}
          fill={'cornflowerblue'}
        />
      </div>
    );
  }
}

export default Timeline;