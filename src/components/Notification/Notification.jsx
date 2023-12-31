import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Notification/Notification.styled';

export function Notification({ message }) {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
