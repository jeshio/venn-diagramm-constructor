import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer } from 'react-konva';
import CircleSet from './CircleSet';
import styles from './index.module.scss';

const SetsStage = ({ children }) => (
  <Stage className={styles.self} width={600} height={500}>
    <Layer>
      <CircleSet x={210} />
      <CircleSet x={390} />
      {children}
    </Layer>
  </Stage>
);

SetsStage.propTypes = {
  children: PropTypes.node,
};

SetsStage.defaultProps = {
  children: [],
};

export default SetsStage;
