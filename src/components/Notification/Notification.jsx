import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Notification/Notification.styled';

export class Notification extends Component {
  render() {
    return (
      <>
        <Message>{this.props.message}</Message>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
