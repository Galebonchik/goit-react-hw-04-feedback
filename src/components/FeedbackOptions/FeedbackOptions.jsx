import React from 'react';
import {
  Buttons,
  ButtonObject,
} from '../FeedbackOptions/FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map(option => (
        <li key={option}>
          <ButtonObject type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </ButtonObject>
        </li>
      ))}
    </Buttons>
  );
}
