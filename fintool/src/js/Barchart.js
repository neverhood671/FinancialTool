import React, {
  Component
} from 'react';
import '../css/barchart.css';
import * as d3 from 'd3';
import {
  withFauxDOM
} from 'react-faux-dom';


const allNotes = [{
    "id": "96145928-c9e9-4816-b97b-366e31ba7ed1",
    "date": "09.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "56c1ddc6-b71e-45fc-ba05-80cd545da0c7",
    "description": "Burger king",
    "value": 200
  },
  {
    "id": "b4e366ca-e0c4-4b3c-b099-8d15a2ba8185",
    "date": "10.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 1122.12
  },
  {
    "id": "f32f8898-5dbb-434e-8794-927d594b042d",
    "date": "11.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 592.12
  },
  {
    "id": "71744d2d-6416-4e5c-982e-9e1e8119bd12",
    "date": "12.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 125.12
  },
  {
    "id": "7316fc1e-3b12-4511-9940-4cb30749772c",
    "date": "13.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 587.32
  },
  {
    "id": "7324eca8-611a-4f55-964d-69d7f6f39442",
    "date": "14.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 885.36
  },
  {
    "id": "58194e9d-e8a0-405b-a360-58325bec5ee1",
    "date": "15.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 687.12
  },
  {
    "id": "dd956eec-feb6-49b1-b6af-379cef516787",
    "date": "09.05.2018",
    "createdBy": "Andrey Mishunin",
    "categoryId": "5a0ffa9c-589b-4189-9dc5-e4d9e768d3a6",
    "description": "Бритва",
    "value": 1122.12
  }
];

class BarChart extends Component {

  /**
   * @param {Array} data - Array of Objects describes each income/outgo. Every object should contain
   * date (type: String, Ex: '25.05.2018') and value (type: Number, Ex: 1520.36) fields.
   */
  transformDataForBarChartDrawing(data) {
    var barChartData = new Map();
    data.forEach(note => {
      if (barChartData.has(note.date)) {
        barChartData.set(note.date, note.value + barChartData.get(note.date));
      } else {
        barChartData.set(note.date, note.value);
      }
    });
    return barChartData;
  }

  /**
   * @param {Map} barChartData - Map contains date as a key and total daily expenses as a value.
   */
  createBars(barChartData) {
    var svg = d3.select(".BarChart").append("svg").attr("class", "barchart-block"),
      width = svg[0][0].clientWidth * 0.8,
      height = svg[0][0].clientHeight * 0.8,
      marginTop = svg[0][0].clientHeight * 0.1,
      marginLeft = svg[0][0].clientWidth * 0.15;

    var dates = Array.from(barChartData.keys()).map(function(d) {
      return d3.time.format("%d.%m.%Y").parse(d);
    });
    var scaleX = d3.time.scale()
      .domain([d3.min(dates), d3.max(dates)])
      .range([0, width]);

    var values = Array.from(barChartData.values());
    var scaleY = d3.scale.linear()
      .domain([0, d3.max(values)])
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
        "translate(" + marginLeft + "," + (height + marginTop) + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis")
      .attr("transform",
        "translate(" + marginLeft + "," + marginTop + ")")
      .call(yAxis);

  }
  componentDidMount() {
    var barChartData = this.transformDataForBarChartDrawing(allNotes);
    this.createBars(barChartData);
  }

  render() {
    return ( <div className = "BarChart" />);
  }
}

export default withFauxDOM(BarChart);
