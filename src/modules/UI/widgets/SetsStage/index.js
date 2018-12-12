import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Text } from 'react-konva';
import { POINT_SHAPES, POINT_COLORS } from 'modules/Builder/constants';
import CircleSet from './CircleSet';
import styles from './index.module.scss';

const getTextParams = setParams => ({
  text: (
    (setParams.shape
      ? POINT_SHAPES.find(shape => shape.name === setParams.shape)
      : POINT_COLORS.find(color => color.name === setParams.color)) || {}
  ).title,
  x: setParams.x - setParams.radius,
  y: setParams.y - setParams.radius - 20,
  align: 'center',
  fontSize: 16,
  width: setParams.radius * 2,
});

const SetsStage = ({
  children, forwardedRef, leftSetParams, rightSetParams,
}) => (
  <Stage ref={forwardedRef} className={styles.self} width={600} height={500}>
    <Layer>
      <Text {...getTextParams(leftSetParams)} />
      <Text {...getTextParams(rightSetParams)} />
      <CircleSet {...leftSetParams} name="leftSet" />
      <CircleSet {...rightSetParams} name="rightSet" />
      {children}
    </Layer>
  </Stage>
);

SetsStage.propTypes = {
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  leftSetParams: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
  rightSetParams: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    radius: PropTypes.number,
  }).isRequired,
};

SetsStage.defaultProps = {
  children: [],
  forwardedRef: {},
};

export default SetsStage;
