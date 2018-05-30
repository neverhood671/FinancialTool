import React, { Component } from 'react';

class NewReminderForm extends Component {
  render() {
    var date = <input className="dateInput"></input>,
        description =<input className="descriptionInput"></input>
        ;
    return (
      <div className="new_reminder_form">
        <h1 className="newReminderHeader">Add New Reminder</h1>
        <label>Date</label> {date}
        <label>Description</label> {description}
      </div>
    );
  }
}

export default NewReminderForm;
