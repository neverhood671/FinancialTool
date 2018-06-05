import React, { Component } from 'react';

class NewNoteForm extends Component {
  render() {
    var typeSelector =
              <div className="note_type_selector">
                  <label className="slider_label">Income</label>
                  <label className="slider">
                    <input type="checkbox" className="slider_checkbox"/>
                    <div className="slider_circle"></div>
                  </label>
                  <label className="slider_label">Expenses</label>
               </div>,
        date = <input className="date_input"></input>,
        category = <select className="category_input"></select>,
        amount = <input className="amount_input"></input>,
        description = <input className="description"></input>;
    return (
      <div className="new_note_form form">
        <h1 className="new_note_header">Add New Note</h1>
        {typeSelector}
        <label className="third_col">Description</label>{description}
        <label className="first_col">Date</label>{date}
        <label className="first_col">Category</label>{category}
        <label className="first_col">Amount</label> {amount}
      </div>
    );
  }

  componentDidMount() {
    this.createCategoriesDropDown();
  }

  createCategoriesDropDown = () => {
    var categories = ["food", "dance", "transport"];
    var dropdown = document.querySelector(".category_input");
    categories.forEach((category, i) => {
        var option = document.createElement('option');
        option.innerHTML = category;
        dropdown.append(option);
    });
  }
}

export default NewNoteForm;
