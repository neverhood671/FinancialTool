import React, {Component} from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';


class CalendarArea extends Component {

  state = {
    selectedDate: moment()
  };

  onChange = (date) => {
    this.setState({
      selectedDate: date
    });
  }

  render() {
    return (
      <div className="calendar_area">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          className="calendar"
        />
      </div>
    );
  }

}

export default CalendarArea;
