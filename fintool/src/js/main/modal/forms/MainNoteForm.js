import React, { Component } from 'react';

class MainNoteForm extends Component {

  render() {
    var date = <input type="date" className="date_input"></input>,
        category = <select className="category_input"></select>,
        amount = <input className="amount_input"></input>,
        description = <input className="description"></input>;
    return (
        <div className="main_form">
          <div className="third_col">
            <label>Description</label>
            {description}
          </div>
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

export default MainNoteForm;
