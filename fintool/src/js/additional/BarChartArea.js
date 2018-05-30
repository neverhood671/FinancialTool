import React, {Component} from 'react';
import BarChart from "./BarChart";
import Dropdown from 'react-dropdown';


 const options = [
  'last week', 'last mounth', 'last 3 mouthes', 'last 6 mouthes'
];


class BarChartArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0]
    };
  }

  updateBarchartAxis(e){
    this.state.selectedOption = e.value;
  }

  render() {
    return (
            <div className = "barchart_area">
              <div className="chart_header">Expenses, &#8381;</div>
              <BarChart axisScale={this.state.selectedOption}/>
              <Dropdown
                className='dropdown'
                placeholderClassName='dropdown_placeholder'
                menuClassName='dropdown_menu'
                arrowClassName='dropdown_arrow'
                options={options}
                value={options[0]}
                onChange={this.updateBarchartAxis.bind(this)}
              />
            </div>
    );
  }
}


export default BarChartArea;
