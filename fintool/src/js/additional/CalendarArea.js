import React, { Component } from 'react';
import Calendar from 'rc-calendar';

class CalendarArea extends Component {
  render() {
    return (
      <div className="calendar_area">
        <Calendar
          className='calendar'
         />
      </div>
    );
  }
}

export default CalendarArea;
