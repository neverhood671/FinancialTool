import React, { Component } from 'react';
import '../css/MainArea.css';
import StackedBarChart from "./StackedBarChart";

class MainArea extends Component {
  render() {
    return (
      <div className="MainArea">
        <div className="main_area_header">Current Mounth Expenses</div>
        <StackedBarChart />
      </div>
    );
  }
}

export default MainArea;
