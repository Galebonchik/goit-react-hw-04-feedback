import React from 'react';
import PropTypes from 'prop-types';
import { ListOfReviews, Review } from '../Statistics/Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ListOfReviews>
      <Review>Good: {good}</Review>
      <Review>Neutral: {neutral}</Review>
      <Review>Bad: {bad} </Review>
      <Review>Total: {total} </Review>
      <Review>Positive feedback: {positivePercentage}%</Review>
    </ListOfReviews>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
