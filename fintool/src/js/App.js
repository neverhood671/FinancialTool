import React, { Component } from 'react';

import '../css/App.css';
import '../css/BarChart.css';
import '../css/DailyInfo.css';
import '../css/Info.css';
import '../css/MainArea.css';
import '../css/StackedBarChart.css';
import '../css/SideBlock.css';
import '../css/ModalWindow.css';


import SideBlock from "./additional/SideBlock";
import MainArea from "./main/MainArea";

const INFO_MODE = 0,
      DAILY_INFO_MODE = 1;

class App extends Component {

  state = {
    mode: INFO_MODE,
    selectedDate: new Date()
  }

  render() {
    return (
        <div className="app">
          <SideBlock
            selectedDate={this.state.selectedDate}
            dateChangeHandler={this.handleDateChange.bind(this)}
            mode={this.state.mode}
            />
          <MainArea
            selectedDate={this.state.selectedDate}
            mode={this.state.mode}
            />
        </div>
    );
  }

  handleDateChange = (date, targetMode) => {
    this.setState({
      selectedDate: date,
      mode: targetMode
    });
  }
}

export default App;
