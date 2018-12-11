import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Rect, RegularPolygon } from 'react-konva';

const KonvaPoint = ({ x, shape }) => {
  let Component;

  switch (shape) {
    case 'triangle':
      Component = props => (
        <RegularPolygon {...props} x={props.x + 30} y={props.y + 37.5} sides={3} radius={35} />
      );
      break;
    case 'square':
      Component = props => <Rect {...props} width={60} height={60} />;
      break;
    default:
      Component = props => <Circle {...props} x={props.x + 30} y={props.y + 30} radius={30} />;
  }

  return <Component fill="#aaf" x={x} y={25} draggable />;
};

KonvaPoint.propTypes = {
  x: PropTypes.number.isRequired,
  shape: PropTypes.string,
};

KonvaPoint.defaultProps = {
  shape: 'circle',
};

export default KonvaPoint;
