import React, { Component } from 'react';
import StackedBarChart from './StackedBarChart'
import RemindersBlock from './RemindersBlock'
import LastNotesBlock from './LastNotesBlock'


const monthMap = {
  0: "Junuary",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

class Info extends Component {

  render() {
    var header = <div className="info_header">
                  {monthMap[this.props.selectedDate.getMonth()] + " Expenses"}
                </div>,
        stackedBarChart =  <StackedBarChart/>,
        newReminderButton =
          <button id="new_reminder" className="open_modal_button" onClick={this.props.buttonClickHandler}>
            Add new reminder
          </button>,
        newIncomeOrExpensesButton =
          <button id="new_note" className="open_modal_button" onClick={this.props.buttonClickHandler}>
            Add new income/expenses
          </button>,
        reminders = <RemindersBlock/>,
        lastNotes = <LastNotesBlock/>;

    return (
      <div className="info">
        {header}
        {stackedBarChart}
        {newReminderButton}
        {newIncomeOrExpensesButton}
        {reminders}
        {lastNotes}
      </div>
    );
  }


}

export default Info;
