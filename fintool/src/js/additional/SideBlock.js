import React, { Component } from 'react';

import CalendarArea from "./CalendarArea";
import BarChartArea from "./BarChartArea";

const INFO_MODE = 0,
      DAILY_INFO_MODE = 1;

class SideBlock extends Component {
  navButtonClickHandler = () => {
    this.props.dateChangeHandler(new Date, +!this.props.mode);
  }

  calendarClickHandler = (date) => {
    this.props.dateChangeHandler(date, DAILY_INFO_MODE);
  }

  render() {

    var navButton = <button
                      className="nav_button"
                      onClick={this.navButtonClickHandler}>
                        {this.props.mode ? "To Start Page": "To Daily Dairy" }
                    </button>;
    return (
      <div className="side_block">
        {navButton}
        <CalendarArea
          selectedDate={this.props.selectedDate}
          dateChangeHandler={this.calendarClickHandler}
        />
        <BarChartArea />
      </div>
    );
  }
}

export default SideBlock;
