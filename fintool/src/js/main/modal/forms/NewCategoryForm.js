import React, { Component } from 'react';

class NewCategoryForm extends Component {
  render() {
    return (
      <div className="form">
        <h1 className="new_reminder_header">Add New Reminder</h1>
        <label>Date</label>
        <label>Description</label>
      </div>
    );
  }
}

export default NewCategoryForm;
