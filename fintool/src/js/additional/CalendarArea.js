import React, {Component} from 'react';
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';


class CalendarArea extends Component {

  state = {
    startDate: moment()
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="calendar_area">
        <ModernDatepicker
          date = {this.state.startDate}
          format = {'DD-MM-YYYY'}
          className = 'color'
          onChange = {this.handleChange}
        />
      </div>
    );
  }

}

export default CalendarArea;
