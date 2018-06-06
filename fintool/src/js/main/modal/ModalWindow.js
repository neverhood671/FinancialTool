import React, {Component} from 'react';
import NewNoteForm from './forms/NewNoteForm';
import NewReminderForm from './forms/NewReminderForm';
import NewIncomeForm from './forms/NewIncomeForm';
import NewExpensesForm from './forms/NewExpensesForm';
import NewCategoryForm from './forms/NewCategoryForm';


class ModalWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closeModalWindow: props.closeHandler,
      type: props.modalWindowType
    };
  }

  render() {
    var close = <button onClick = {this.state.closeModalWindow} className = "close" > X </button>,
        form = this.getForm(this.state.type),
        save = <button
                  className = "save_button"
                  onClick = {this.saveButtonClickHandler}>
                  SAVE</button>,
        content = <div className = "modal_content">
                    {close}
                    {form}
                    {save}
                  </div>;
    return (<div className = "modal_window">
              {content}
            </div>
    );
  }

  componentDidMount() {
    Array.from(document.querySelectorAll('input')).forEach(input => {
      input.addEventListener("blur", this.inputBlurHandler, true);
      input.addEventListener("focus", this.inputFocusHandler, true);
    });
  }

  inputFocusHandler = (event) => {
    if (event.target.tagName === "INPUT") {
      event.target.classList.remove("invalid_input");
    }
  }

  inputBlurHandler = (event) => {
    var input = event.target;
    if ((input.tagName === "INPUT") &&
        ((!this.isInputFilled(input.value)) ||
          (input.classList.contains("date_input") && !this.isDateValid(input.value)) ||
          (input.classList.contains("amount_input") && !this.isAmountValid(input.value))))
      input.classList.add("invalid_input");
  }

  isInputFilled = (input) => {
    return input.length > 0;
  }

  isAmountValid = (amountString) => {
    return !isNaN(+amountString);
  }

  isDateValid = (dateString) => {
    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString)) {
      return false
    };
    var parts = dateString.split("-"),
      day = parseInt(parts[2], 10),
      month = parseInt(parts[1], 10),
      year = parseInt(parts[0], 10);
    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
      return false
    };
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29
    };
    return day > 0 && day <= monthLength[month - 1];
  }

  saveButtonClickHandler = (event) => {
    Array.from(document.querySelectorAll('input')).forEach(input => {
       if (!this.isInputFilled(input.value)){
         input.classList.add("invalid_input");
       }
    });
    if (document.querySelectorAll(".invalid_input").length > 0) {
      alert("Incorect input!!!");
    } else {
      //// TODO: POST request here
      alert("New note was succesfully created");
      this.state.closeModalWindow(event);
    }
  }

  getForm(modalWindowType) {
    switch (modalWindowType) {
      case "new_reminder":
        return <NewReminderForm />;
      case "new_note":
        return <NewNoteForm />;
      case "new_income":
        return <NewIncomeForm />;
        break;
      case "new_expenses":
        return <NewExpensesForm />;
        break;
      case "new_category":
      return <NewCategoryForm />;
      break;
    }
  }
}

export default ModalWindow;
