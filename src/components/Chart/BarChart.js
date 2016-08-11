import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import _ from 'lodash';
import $ from 'jquery';
import d3 from 'd3';

class BarChart extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      width: 0
    }
  }

  componentWillMount(){

    var self=this;

    $(window).on('resize', function(e) {
      self.updateSize();
    });

    this.setState({width:this.props.width});

  }
  componentDidMount() {
    this.updateSize();
  }
  componentWillUnmount(){
    $(window).off('resize');
  }

  updateSize(){
    var node = ReactDOM.findDOMNode(this);
    var parentWidth=$(node).width();

    if(parentWidth<this.props.width){
      this.setState({width:parentWidth-20});
    }else{
      this.setState({width:this.props.width});
    }
  }

  render(){
    var data = this.props.data;
    console.info(data)
    var margin={top:5,right:5,bottom:5,left:5},
      // w=this.state.width-(margin.left+margin.right),
      h=this.props.height-(margin.top+margin.bottom);

    var transform='translate('+margin.left+','+margin.top+')';

    var x=d3.scale.ordinal()
      .domain(data.map(function(d){
        return d.title;
      }))
      .rangeRoundBands([0,this.state.width],.35);

    var y=d3.scale.linear()
      .domain([0,100])
      .range([this.props.height,0]);

    var rectBackground=(data).map(function(d, i) {

      return (
        <rect fill="#58657f" rx="3" ry="3" key={'bg-' + i}
              x={x(d.title)} y={margin.top-margin.bottom}
              height={h}
              width={x.rangeBand()}/>
      )
    });
    var rectForeground=(data).map(function(d, i) {

      return (
        <rect fill="#74d3eb" rx="3" ry="3" key={'fg-' + i}
              x={x(d.title)} y={y(d.value)} className="shadow"
              height={h-y(d.value)}
              title={d.value}
              width={x.rangeBand()}/>
      )
    });

    var titles = (data).map(function (d, i) {
      var transform = `rotate(45,${x(d.title)},${h+10})`;
      return (
        <text
          key={'text-' + i}
          x={x(d.title)}
          y={h+10}
          width={x.rangeBand()}
          transform={transform}
        >{d.title}</text>
      )
    });

    return(
      <div>
        <svg id={this.props.chartId} width={this.state.width}
             height={this.props.height+50}>

          <g transform={transform}>
            {rectBackground}
            {rectForeground}
            {titles}
          </g>
        </svg>
      </div>
    );
  }

}

BarChart.defaultProps = {
  width: 300,
  height: 70,
  chartId: 'v_chart'
};

export default BarChart;
