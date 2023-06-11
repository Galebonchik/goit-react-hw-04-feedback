import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListOfReviews, Review } from '../Statistics/Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <ListOfReviews>
        <Review>Good: {this.props.good}</Review>
        <Review>Neutral: {this.props.neutral}</Review>
        <Review>Bad: {this.props.bad} </Review>
        <Review>Total: {this.props.total} </Review>
        <Review>Positive feedback: {this.props.positivePercentage}%</Review>
      </ListOfReviews>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
