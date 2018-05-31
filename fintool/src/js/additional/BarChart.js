import {Component} from 'react';

import * as utils from '../utils.js'
import * as d3 from 'd3';
import {withFauxDOM} from 'react-faux-dom';
import ReactFauxDOM from 'react-faux-dom';

class BarChart extends Component {

  render() {
    const div = new ReactFauxDOM.Element('div');

    var svg = d3.select(div).attr("class", "barchart-block").append("svg").attr("class", "barchart");
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      },
      width = 250 /*- margin.left*/ - margin.right,
      height = 250 - margin.top - margin.bottom;

    var minX = new Date(),
      maxX = new Date();
    var maxY = 1200;
    switch (this.props.axisScale) {
      case 'last week':
        minX.setDate(minX.getDate() - (minX.getDay() + 6) % 7);
        maxX.setDate(minX.getDate() + 6);
        break;
      case 'last mounth':
        minX = new Date(minX.getFullYear(), minX.getMonth(), 1);
        maxX = new Date(maxX.getFullYear(), maxX.getMonth() + 1, 0);
        break;
      case 'last 3 mouthes':
        minX = new Date(minX.getFullYear(), minX.getMonth() - 2, 1);
        maxX = new Date(maxX.getFullYear(), maxX.getMonth() + 1, 0);
        break;
      case 'last 6 mouthes':
        minX = new Date(minX.getFullYear(), minX.getMonth() - 5, 1);
        maxX = new Date(maxX.getFullYear(), maxX.getMonth() + 1, 0);
        break;
    }

    var scaleX = d3.time.scale()
      .domain([minX, maxX])
      .range([0, width]);


    var scaleY = d3.scale.linear()
      .domain([maxY, 0])
      .range([0, height]);

    var xAxis = d3.svg.axis()
      .scale(scaleX)
      .orient("bottom")
      .ticks(7)
      .tickFormat(d3.time.format("%d.%m"));

    var yAxis = d3.svg.axis()
      .scale(scaleY)
      .orient("left")
      .ticks(5);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform",
        "translate(" + margin.left + "," + (height + margin.top) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .call(yAxis);



    return div.toReact();
  }
}

export default withFauxDOM(BarChart);
