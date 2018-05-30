import React, { Component } from 'react';

class NewNoteForm extends Component {
  render() {
    var type = <span className="noteTypeSelector">
                  <label>Income</label>
                  <input type="checkbox"/>
                  <label>Expenses</label>
               </span>,
        date = <input></input>,
        category = <input></input>,
        amount = <input></input>,
        description = <input></input>;
    return (
      <div className="new_note_form">
        <h1 className="newNoteHeader">Add New Note</h1>
        {type}
        <div className="description_block">
          <label>Description</label>
          <div>{description}</div>
        </div>
        <label>Date</label>{date}
        <label>Category</label>{category}
        <label>Amount</label> {amount}


      </div>
    );
  }
}

export default NewNoteForm;
