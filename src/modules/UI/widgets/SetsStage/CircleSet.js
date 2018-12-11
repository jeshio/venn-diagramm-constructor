import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'react-konva';

const CircleSet = ({ x }) => <Circle radius={190} stroke="#aaf" strokeWidth={4} x={x} y={300} />;

CircleSet.propTypes = {
  x: PropTypes.number.isRequired,
};

export default CircleSet;
