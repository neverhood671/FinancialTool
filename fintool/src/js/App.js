import React, { Component } from 'react';
import '../css/App.css';
import CalendarArea from "./CalendarArea";
import BarChartArea from "./BarChartArea";
import MainArea from "./MainArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalendarArea />
        <BarChartArea />
        <MainArea />
      </div>
    );
  }
}

export default App;
