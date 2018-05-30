import React, { Component } from 'react';

class LastNotesBlock extends Component {
  render() {
    var lastNotesList = <div className="last_notes_list"></div>;
    return (
      <div className="last_notes_block">
        <h1>Last Income/Expenses</h1>
        {lastNotesList}
      </div>
    );
  }
}

export default LastNotesBlock;
