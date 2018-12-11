import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer } from 'react-konva';
import CircleSet from './CircleSet';
import styles from './index.module.scss';

const SetsStage = ({
  children, forwardedRef, leftSetParams, rightSetParams,
}) => (
  <Stage ref={forwardedRef} className={styles.self} width={600} height={500}>
    <Layer>
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
