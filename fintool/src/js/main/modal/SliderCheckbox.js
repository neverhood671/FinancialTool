import React, { Component } from 'react';

class SliderCheckbox extends Component {

  render() {
    var leftLabel = <label className="slider_label">{this.props.leftLabel}</label>,
        rightLabel = <label className="slider_label">{this.props.rightLabel}</label>,
        sliderCheckbox =
            <label className="slider">
              <input type="checkbox" className="slider_checkbox"/>
              <div className="slider_circle"></div>
            </label>;

    return (
      <div className="note_type_selector">
          {leftLabel}
          {sliderCheckbox}
          {rightLabel}
       </div>
      );
  }
}

export default SliderCheckbox;
