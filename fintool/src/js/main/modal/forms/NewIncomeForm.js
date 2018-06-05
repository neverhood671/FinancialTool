import React, { Component } from 'react';

class NewIncomeForm extends Component {
  render() {
    var date = <input className="date_input"></input>,
        category = <select className="category_input"></select>,
        amount = <input className="amount_input"></input>,
        description = <input></input>;
    return (
      <div className="new_note_form">
        <h1 className="new_note_header">Add New Note</h1>
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

export default NewIncomeForm;
