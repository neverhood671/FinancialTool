import React, { Component } from 'react';

class DailyInfo extends Component {
  render() {
    var newIncomeButton = <button id="new_income" >
                            <div className="button_circle green"></div>
                            <div className="button_text">ADD INCOME</div>
                          </button>,
        newExpensesButton = <button id="new_expenses" >
                              <div className="button_circle red"></div>
                              <div className="button_text">ADD EXPENSE</div>
                            </button>,
        newCategoryButton = <button id="new_category" >
                              <div className="button_circle blue"></div>
                              <div className="button_text">ADD NEW CATEGORY</div>
                            </button>,
        toolBar = <div className="tool_bar">
                    {newIncomeButton}
                    {newExpensesButton}
                    {newCategoryButton}
                  </div>;
    return (
      <div className="daily_info">
        {toolBar}
      </div>
    );
  }

  componentDidMount(){
    Array.from(document.querySelectorAll('.tool_bar button')).forEach(button => {
      button.addEventListener("click", this.props.buttonClickHandler);
    });
  }
}

export default DailyInfo;
