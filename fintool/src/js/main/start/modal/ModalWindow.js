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
}

export default ModalWindow;
