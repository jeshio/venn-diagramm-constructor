import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Rect, RegularPolygon } from 'react-konva';

const KonvaPoint = ({
  x, y, shape, scaleMultiplier, color, bordersColor, isSuccess, ...konvaProps
}) => {
  let Component;

  switch (shape) {
    case 'triangle':
      Component = props => <RegularPolygon {...props} sides={3} radius={35 * scaleMultiplier} />;
      break;
    case 'square':
      Component = props => (
        <Rect
          {...props}
          width={60 * scaleMultiplier}
          x={props.x - 30 * scaleMultiplier}
          y={props.y - 30 * scaleMultiplier}
          height={60 * scaleMultiplier}
        />
      );
      break;
    default:
      Component = props => <Circle {...props} radius={30 * scaleMultiplier} />;
  }

  return <Component {...konvaProps} shape={shape} color={color} fill={color} stroke={bordersColor} strokeWidth={3} opacity={0.8} x={x} y={y} draggable={!isSuccess} />;
};

KonvaPoint.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  bordersColor: PropTypes.string.isRequired,
  scaleMultiplier: PropTypes.number,
  shape: PropTypes.string,
  color: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
};

KonvaPoint.defaultProps = {
  shape: 'circle',
  scaleMultiplier: 1,
};

export default KonvaPoint;
