import React, { Component } from 'react';
import DailyInfo from './daily/DailyInfo'
import ModalWindow from './modal/ModalWindow'
import Info from './start/Info'

const INFO_MODE = 0,
      DAILY_INFO_MODE = 1;

class MainArea extends Component {

  state = {
    isModalWindowShown: false
  }

  render() {
    var body, modalWindow =
      this.state.isModalWindowShown &&
      <ModalWindow modalWindowType={this.state.modalWindowType}
                    closeHandler={this.handleButtonClick} />;

    if (this.props.mode === INFO_MODE) {
      body = <Info
                selectedDate={this.props.selectedDate}
                buttonClickHandler={this.handleButtonClick.bind(this)}
              />
    } else {
      body = <DailyInfo
                selectedDate={this.props.selectedDate}
                buttonClickHandler={this.handleButtonClick.bind(this)}
              />;
    }

    return (
      <div className="main_area">
        {body}
        {modalWindow}
      </div>
    );
  }

  handleButtonClick = (e) => {
    if (e.currentTarget.tagName == "BUTTON") {
      this.setState({
        mode: this.state.mode,
        isModalWindowShown: !this.state.isModalWindowShown,
        modalWindowType: e.currentTarget.id
      });
    }
  }
}

export default MainArea;
