import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-components';
import { SetsStage, KonvaPoint } from 'ui-widgets';

export default class Stage extends PureComponent {
  static propTypes = {
    isIntersect: PropTypes.func.isRequired,
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

  static getSetParams({ radius, x, y }) {
    return { radius, x, y };
  }

  constructor() {
    super();
    this.stage = React.createRef();
  }

  componentDidMount = () => {
    this.stage.current.on('dragend', (evt) => {
      const { leftSetParams, rightSetParams, isIntersect } = this.props;
      const stage = evt.target.getStage();
      const layer = evt.target.getLayer();
      const pointerPosition = stage.getPointerPosition();
      const point = layer.getIntersection(pointerPosition);

      const intersectWithLeftSet = isIntersect(point.attrs, leftSetParams);
      const intersectWithRightSet = isIntersect(point.attrs, rightSetParams);
    });
  };

  render() {
    const { leftSetParams, rightSetParams } = this.props;
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
          <KonvaPoint id={1} shape="square" x={40} />
          <KonvaPoint id={2} shape="circle" x={120} />
          <KonvaPoint id={3} shape="triangle" x={200} />
        </SetsStage>
      </div>
    );
  }
}
