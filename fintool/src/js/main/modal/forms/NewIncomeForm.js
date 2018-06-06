import React, { Component } from 'react';
import MainNoteForm from './MainNoteForm'

class NewIncomeForm extends Component {
  render() {
    return (
      <div className="new_note_form form">
        <h1 className="new_note_header">Add New Income</h1>
        <MainNoteForm/>
      </div>
    );
  }

}

export default NewIncomeForm;
