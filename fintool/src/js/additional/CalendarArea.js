import React, {Component} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';


class CalendarArea extends Component {

  render() {
    return (
      <div className="calendar_area">
        <Calendar
          onChange={this.props.dateChangeHandler}
          value={this.props.selectedDate}
          className="calendar"
        />
      </div>
    );
  }

}

export default CalendarArea;
