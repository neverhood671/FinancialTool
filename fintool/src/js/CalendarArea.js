import React, { Component } from 'react';
import Calendar from 'rc-calendar';

import '../css/CalendarArea.css';

class CalendarArea extends Component {
  render() {
    return (
      <div className="CalendarArea">
        <Calendar
          className='calendar'
          showDateInput='false'
         />
      </div>
    );
  }
}

export default CalendarArea;
