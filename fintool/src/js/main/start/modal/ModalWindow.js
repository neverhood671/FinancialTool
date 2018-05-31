import React, { Component } from 'react';
import NewNoteForm from './NewNoteForm';
import NewReminderForm from './NewReminderForm';

class ModalWindow extends Component {

  constructor(props){
    super(props);
    this.state = {
      closeModalWindow: props.closeHandler,
      type: props.modalWindowType
    };
  }

  render() {
    var form;
    if (this.state.type == "new_reminder") {
      form = <NewReminderForm/>;
    } else if (this.state.type == "new_note") {
      form = <NewNoteForm/>
    }

    var close = <div onClick={this.state.closeModalWindow} className="close">X</div>,
        save = <button className="save_button">SAVE</button>,
        content = <div className="modal_content">
                      {close}
                      {form}
                      {save}
                  </div>;
    return (
      <div className="modal_window">
        {content}
      </div>
    );
  }

  componentDidMount() {
    Array.from(document.querySelectorAll('input')).forEach(input => {
        input.addEventListener("blur", this.inputBlurHandler, true);
        input.addEventListener("focus", this.inputFocusHandler , true);
    });
  }

  inputFocusHandler = (event) => {
      if (event.target.tagName == "INPUT") {
          event.target.classList.remove("invalid_input");
      }
  }

  inputBlurHandler = (event) => {
     if (event.target.tagName == "INPUT") {
          if (event.target.classList.contains("date_input") && !this.isValidDate(event.target.value)) {
            event.target.classList.add("invalid_input");
          } else if (event.target.classList.contains("amount_input") && isNaN(+event.target.value)){
            event.target.classList.add("invalid_input");
          }
     }
  }

  isValidDate = (dateString) => {
    if(!/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateString))
        return false;
    var parts = dateString.split("."),
        day = parseInt(parts[1], 10),
        month = parseInt(parts[0], 10),
        year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
  };
}

export default ModalWindow;
