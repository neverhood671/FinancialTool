import React, { Component } from 'react';
import DailyInfo from './daily/DailyInfo'
import Info from './start/Info'

const INFO_MODE = 0,
      DAILY_INFO_MODE = 1;

class MainArea extends Component {

  state = {
    mode: INFO_MODE
  }

  render() {
    var header = <div className="main_area_header">Current Mounth Expenses</div>,
        body = this.state.mode == INFO_MODE ? <Info /> : <DailyInfo />;
    return (
      <div className="main_area">
        {header}
        {body}
      </div>
    );
  }
}

export default MainArea;
