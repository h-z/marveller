import React, { Component } from 'react';
import './Timeline.css';
import _ from 'lodash';

import { BarChart } from 'rd3';


class Timeline extends Component {

  createChartData(data, name) {
    return {
      name: name,
      values: _.map(data, function (value, year) {
        return {x: year, y: value}
      }),
    }
  }

  render() {
    if (0 === _.values(this.props.data).length) {
      return (<div className="Timeline"></div>);
    }
    var data = [this.createChartData(this.props.data, 'Issues/year')];
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