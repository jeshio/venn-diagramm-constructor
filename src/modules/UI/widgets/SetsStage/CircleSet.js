import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'react-konva';

const CircleSet = props => <Circle {...props} stroke="#aaf" strokeWidth={4} />;

CircleSet.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CircleSet;
