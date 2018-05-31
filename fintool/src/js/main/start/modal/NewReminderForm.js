import React, { Component } from 'react';

class NewReminderForm extends Component {
  render() {
    var date = <input className="date_input"></input>,
        description =<input className="description_input"></input>;
    return (
      <div className="new_reminder_form">
        <h1 className="new_reminder_header">Add New Reminder</h1>
        <label>Date</label> {date}
        <label>Description</label> {description}
      </div>
    );
  }
}

export default NewReminderForm;
