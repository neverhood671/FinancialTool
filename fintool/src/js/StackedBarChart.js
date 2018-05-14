import React, {Component} from 'react';
import '../css/StackedBarChart.css';
import * as d3 from 'd3';
import {
  withFauxDOM
} from 'react-faux-dom';


class StackedBarChart extends Component {

  render() {
    return ( <div className = "StackedBarChart" />);
  }
}

export default withFauxDOM(StackedBarChart);
