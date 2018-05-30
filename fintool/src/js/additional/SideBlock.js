import React, { Component } from 'react';

import CalendarArea from "./CalendarArea";
import BarChartArea from "./BarChartArea";


class SideBlock extends Component {
  render() {
    return (
      <div className="side_block">
        <CalendarArea />
        <BarChartArea />
      </div>
    );
  }
}

export default SideBlock;
