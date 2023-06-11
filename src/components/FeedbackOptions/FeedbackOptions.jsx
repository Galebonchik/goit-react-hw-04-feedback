import React, { Component } from 'react';
import {
  Buttons,
  ButtonObject,
} from '../FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Buttons>
        {this.props.options.map(option => (
          <li key={option}>
            <ButtonObject
              type="button"
              name={option}
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </ButtonObject>
          </li>
        ))}
      </Buttons>
    );
  }
}
