import React, {Component} from 'react';
import '../css/BarChartArea.css';

import BarChart from "./Barchart";
import Dropdown from 'react-dropdown';


 const options = [
  'last week', 'last mounth', 'last 3 mouthes', 'last 6 mouthes'
]

class BarChartArea extends Component {
  render() {
    return (
            <div className = "BarChartArea">
              <div className="chart_header">Expenses, &#8381;</div>
              <BarChart/>
              <Dropdown
                className='dropdown'
                placeholderClassName='dropdown_placeholder'
                menuClassName='dropdown_menu'
                arrowClassName='dropdown_arrow'
                options={options}
                value={options[0]}
              />
            </div>
    );
  }
}


export default BarChartArea;
