import React, { Component } from 'react';
import MainNoteForm from './MainNoteForm'
import SliderCheckbox from '../SliderCheckbox'

class NewNoteForm extends Component {
  render() {
    return (
      <div className="new_note_form form">
        <h1 className="new_note_header">Add New Note</h1>
        <SliderCheckbox leftLabel="Income" rightLabel="Expenses"/>
        <MainNoteForm/>
      </div>
    );
  }
}

export default NewNoteForm;
