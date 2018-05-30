import React, {
  Component
} from 'react';
import * as utils from '../../utils.js';
import * as d3 from 'd3';
import {
  withFauxDOM
} from 'react-faux-dom';


class StackedBarChart extends Component {

  /**
   * @param {Map} barChartData - Map contains date as a key and total daily expenses as a value.
   */
  createBars(barChartData) {
    const faux = this.props.connectFauxDOM('g', 'chart'),
      width = 600,
      height = 60,
      animDuration = 600;
    var totalExpenses = this.getTotalExpenses(barChartData);

    var bars = d3
      .select(faux)
      .selectAll(".bar")
      .data(barChartData);
    bars.exit()
      .transition().duration(animDuration)
      .attr("y", height)
      .attr("height", 0)
      .style("fill-opacity", 0)
      .remove();

    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", height)
      .attr("x", width)
      .attr("width", 0)
      .attr("height", 0)
      .attr("rx", 5).attr("ry", 5)
      .merge(bars)
      .transition().duration(animDuration)
      .attr("y", (d) => (this.scaleHeight(d.count)))
      .attr("height", (d) => (height - this.scaleHeight(d.count)))
      .attr("x", (d, i) => (this.scaleWidth(d.item)))
      .attr("width", this.scaleWidth.bandwidth())
      .style("fill", (d, i) => (this.scaleColor(i)));

    var perc_so_far = 0;

    /*bar
      .append("rect")
      .attr("width", function(d) {
        return ((d.value / totalExpenses) * 100) + "%";
      })
      .attr("x", function(d) {
        var prev_perc = perc_so_far;
        var this_perc = 100 * (d.value / totalExpenses);
        perc_so_far = perc_so_far + this_perc;
        return prev_perc + "%";
      })
      .attr("height", 40)
      .attr("transform", "translate(50,50)")
      .attr("fill", function(d) {
        if (d.category == "food") {
          return "green";
        } else if (d.category == "enterteiment") {
          return "blue";
        } else {
          return "yellow";
        }
      });
*/
  }

  getTotalExpenses(data) {
    var res = 0;
    data.forEach(d => {
      res += d.value;
    });
    return res;
  }



  componentDidMount() {
    var data = utils.getDataJson();
    //var barChartData = this.mapToObject(utils.transformData(data, "category"));
    //  this.createBars(barChartData);
  }

  render() {
    /*  return ( < svg>
        {
          this.props.chart
        }
        < /svg> );
      */

    return <div className = "stacked_barchart" > < /div>
  }
}

//export default withFauxDOM(StackedBarChart);
export default StackedBarChart;
