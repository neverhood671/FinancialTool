import React, { Component } from 'react';

class DailyInfo extends Component {
  render() {
    var newIncomeButton = <button id="new_income">
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
                  </div>,
        notes = this.getNotesList(),
        table = <div className="current_day_notes">
                  <div className="table_header">
                    <div></div>
                    <div>Description</div>
                    <div>Amount</div>
                  </div>
                  {notes}
                </div>;
    return (
      <div className="daily_info">
        {toolBar}
        {table}
      </div>
    );
  }

  componentDidMount(){
    Array.from(document.querySelectorAll('.tool_bar button')).forEach(button => {
      button.addEventListener("click", this.props.buttonClickHandler);
    });
  }

  getNotesList = () => {
    var res =
            <div className="notes_list">
              <div className="current_day_note">
                <div className="note_part category_img"><img src="" alt=""/></div>
                <div className="note_part note_description">kujtyhgbfvcdhbj nlkuj yhgtrfxrcgvhtb</div>
                <div className="note_part note_amount">1450.25</div>
              </div>
              <div className="current_day_note">
                <div className="note_part category_img"><img src="" alt=""/></div>
                <div className="note_part note_description">kujtyhgbfvcdhbj nlkuj yhgtrfxrcgvhtb</div>
                <div className="note_part note_amount">1450.25</div>
              </div>
              <div className="current_day_note">
                <div className="note_part category_img"><img src="" alt=""/></div>
                <div className="note_part note_description">kujtyhgbfvcdhbj nlkuj yhgtrfxrcgvhtb</div>
                <div className="note_part note_amount">1450.25</div>
              </div>
            </div>
    return res;
  }
}



export default DailyInfo;
