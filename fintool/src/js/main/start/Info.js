import React, { Component } from 'react';
import StackedBarChart from './StackedBarChart'
import RemindersBlock from './RemindersBlock'
import LastNotesBlock from './LastNotesBlock'


class Info extends Component {
  render() {
    var stackedBarChart =  <StackedBarChart/>,
        addNewReminderButton = <button>Add new reminder</button>,
        addNewIncomeOrExpensesButton = <button>Add new income/expenses</button>,
        reminders = <RemindersBlock/>,
        lastNotes = <LastNotesBlock/>;
    return (
      <div className="info">
        {stackedBarChart}
        {addNewReminderButton}
        {addNewIncomeOrExpensesButton}
        {reminders}
        {lastNotes}
      </div>
    );
  }
}

export default Info;
