import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, Title } from '../Section/Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
