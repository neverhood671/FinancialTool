import React, { Component } from 'react';
import NewNoteForm from './NewNoteForm';
import NewReminderForm from './NewReminderForm';

class ModalWindow extends Component {

  constructor(props){
    super(props);
    this.closeModalWindow = props.closeHandler;
    this.type = props.modalWindowType;
  }

  render() {
    var form;
    if (this.type == "new_reminder") {
      form = <NewReminderForm/>;
    } else if (this.type == "new_note") {
      form = <NewNoteForm/>
    }

    var close = <div onClick={this.closeModalWindow} className="close">X</div>,
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
}

export default ModalWindow;
