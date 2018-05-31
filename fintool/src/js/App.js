import React, { Component } from 'react';
import '../css/App.css';
import '../css/BarChartArea.css';
import '../css/BarChart.css';
import '../css/CalendarArea.css';
import '../css/DailyInfo.css';
import '../css/Info.css';
import '../css/LastNotesBlock.css';
import '../css/MainArea.css';
import '../css/RemindersBlock.css';
import '../css/StackedBarChart.css';
import '../css/SideBlock.css';
import '../css/ModalWindow.css';

import SideBlock from "./additional/SideBlock";
import MainArea from "./main/MainArea";

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="app">
          <SideBlock />
          <MainArea />
        </div>
      </div>
    );
  }
}

export default App;
