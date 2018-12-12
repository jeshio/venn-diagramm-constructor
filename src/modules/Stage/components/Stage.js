import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isIntersectWithCircle } from 'helpers';
import { Button } from 'ui-components';
import { SetsStage, KonvaPoint } from 'ui-widgets';

export default class Stage extends PureComponent {
  static propTypes = {
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
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    ).isRequired,
    scaleMultiplier: PropTypes.number.isRequired,
  };

  static getSetParams({ radius, x, y }) {
    return { radius, x, y };
  }

  constructor() {
    super();
    this.stage = React.createRef();
  }

  componentDidMount = () => {
    this.stage.current.on('dragend', (evt) => {
      const { leftSetParams, rightSetParams } = this.props;
      const stage = evt.target.getStage();
      const layer = evt.target.getLayer();
      const pointerPosition = stage.getPointerPosition();
      const point = layer.getIntersection(pointerPosition);

      const intersectWithLeftSet = isIntersectWithCircle(point.attrs, leftSetParams);
      const intersectWithRightSet = isIntersectWithCircle(point.attrs, rightSetParams);
    });
  };

  render() {
    const {
      leftSetParams, rightSetParams, points, scaleMultiplier,
    } = this.props;
    return (
      <div>
        <Button href="/" isBackButton>
          Назад
        </Button>

        <SetsStage
          forwardedRef={this.stage}
          leftSetParams={leftSetParams}
          rightSetParams={rightSetParams}
        >
          {points.map(({ x, y, shape, color }, index) => (
            <KonvaPoint
              key={index}
              id={index}
              color={color}
              shape={shape}
              x={x}
              y={y}
              scaleMultiplier={scaleMultiplier}
            />
          ))}
        </SetsStage>
      </div>
    );
  }
}
