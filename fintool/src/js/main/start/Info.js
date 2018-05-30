import React, { Component } from 'react';
import StackedBarChart from './StackedBarChart'
import RemindersBlock from './RemindersBlock'
import LastNotesBlock from './LastNotesBlock'
import ModalWindow from './modal/ModalWindow'


class Info extends Component {
  state = {
    isModalWindowShown: false
  }

  render() {
    var stackedBarChart =  <StackedBarChart/>,
        addNewReminderButton =
          <button id="new_reminder" onClick={this.handleButtonClick}>
            Add new reminder
          </button>,
        addNewIncomeOrExpensesButton =
          <button id="new_note" onClick={this.handleButtonClick}>
            Add new income/expenses
          </button>,
        reminders = <RemindersBlock/>,
        lastNotes = <LastNotesBlock/>,
        modalWindow = this.state.isModalWindowShown &&
          <ModalWindow modalWindowType={this.state.modalWindowType}
                        closeHandler={this.handleButtonClick.bind(this)} />
    return (
      <div className="info">
        {stackedBarChart}
        {addNewReminderButton}
        {addNewIncomeOrExpensesButton}
        {reminders}
        {lastNotes}
        {modalWindow}
      </div>
    );
  }

  handleButtonClick = (e) => {
    this.setState({
      isModalWindowShown: !this.state.isModalWindowShown,
      modalWindowType: e.target.id
    });

  }
}

export default Info;
