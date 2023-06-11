import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from '../Section/Section.styled';

export function Section({ title, children }) {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
