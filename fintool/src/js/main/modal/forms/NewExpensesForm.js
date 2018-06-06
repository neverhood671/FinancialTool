import React, { Component } from 'react';
import MainNoteForm from './MainNoteForm'

class NewExpensesForm extends Component {
  render(){
    return (
      <div className="new_note_form form">
        <h1 className="new_note_header">Add New Expenses</h1>
        <MainNoteForm/>
      </div>
    );
  }
}

export default NewExpensesForm;
