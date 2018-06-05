import React, { Component } from 'react';
import DailyInfo from './daily/DailyInfo'
import Info from './start/Info'

const INFO_MODE = 0,
      DAILY_INFO_MODE = 1;

class MainArea extends Component {

  state = {
    mode: INFO_MODE,
    isModalWindowShown: false
  }

  render() {
    if (this.state.mode === INFO_MODE) {
      var body = <Info
                modalWindowType={this.state.modalWindowType}
                selectedDate={this.props.selectedDate}
                isModalWindowShown={this.state.isModalWindowShown}
                buttonClickHandler={this.handleButtonClick.bind(this)}
              />
    } else {
      var body = <DailyInfo
                modalWindowType={this.state.modalWindowType}
                selectedDate={this.props.selectedDate}
                isModalWindowShown={this.state.isModalWindowShown}
                buttonClickHandler={this.handleButtonClick.bind(this)}
              />;
    }

    return (
      <div className="main_area">
        {body}
      </div>
    );
  }

  handleButtonClick = (e) => {
    if (e.currentTarget.tagName == "BUTTON"){
      this.setState({
        mode: this.state.mode,
        isModalWindowShown: !this.state.isModalWindowShown,
        modalWindowType: e.currentTarget.id
      });
    }

  }
}

export default MainArea;
