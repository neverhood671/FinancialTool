import React, { Component } from 'react';

class LastNotesBlock extends Component {
  render() {
    var remindersList = <div className="reminders_list"></div>;
    return (
      <div className="reminders_block">
          <h1>Reminders</h1>
          {remindersList}
      </div>
    );
  }
}

export default LastNotesBlock;
