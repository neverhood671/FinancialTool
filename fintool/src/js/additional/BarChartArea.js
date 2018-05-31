import React, {Component} from 'react';
import BarChart from "./BarChart";
import Dropdown from 'react-dropdown';


const options = [
  'last week', 'last mounth', 'last 3 mouthes', 'last 6 mouthes'
];


class BarChartArea extends Component {

  state = {
    axisScale: options[0]
  }

  changeAxisScale = (e) => {
    this.setState({
      axisScale: e.value
    });
  }

  render() {
    var header = <div className="chart_header">Expenses, &#8381;</div>,
        barChart = <BarChart axisScale={this.state.axisScale}/>,
        dropDown = <Dropdown
                      className='dropdown'
                      placeholderClassName='dropdown_placeholder'
                      menuClassName='dropdown_menu'
                      arrowClassName='dropdown_arrow'
                      options={options}
                      value={this.state.axisScale}
                      onChange={this.changeAxisScale}
                  />;
    return (
            <div className = "barchart_area">
              {header}
              {barChart}
              {dropDown}
            </div>
    );
  }
}


export default BarChartArea;
