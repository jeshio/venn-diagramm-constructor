import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isIntersectWithCircle } from 'helpers';
import { Button } from 'ui-components';
import { SetsStage, KonvaPoint } from 'ui-widgets';
import styles from './stage.module.scss';

export default class Stage extends PureComponent {
  static propTypes = {
    isPreview: PropTypes.bool.isRequired,
    checkPoint: PropTypes.func.isRequired,
    onCheckClick: PropTypes.func.isRequired,
    onTestPointsClick: PropTypes.func.isRequired,
    setPointPosition: PropTypes.func.isRequired,
    sets: PropTypes.shape({
      leftSet: PropTypes.object,
      rightSet: PropTypes.object,
    }).isRequired,
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

  static FAILED_COLOR = '#f44';

  static SUCCESS_COLOR = '#6b6';

  constructor() {
    super();
    this.stage = React.createRef();
    this.getPointBorderColor = this.getPointBorderColor.bind(this);
  }

  componentDidMount = () => {
    this.stage.current.on('dragstart', (evt) => {
      const stage = evt.target.getStage();
      const layer = evt.target.getLayer();

      const pointerPosition = stage.getPointerPosition();
      const point = layer.getIntersection(pointerPosition);
      if (!point) return;
      point.strokeWidth(0);
      layer.draw();
    });

    this.stage.current.on('dragend', (evt) => {
      const { setPointPosition } = this.props;
      const stage = evt.target.getStage();
      const layer = evt.target.getLayer();

      const pointerPosition = stage.getPointerPosition();
      const point = layer.getIntersection(pointerPosition);
      if (!point) return;

      const bordersColor = this.getPointBorderColor(point.attrs);

      point.stroke(bordersColor);
      point.strokeWidth(3);
      layer.draw();
      setPointPosition(point.attrs.id, point.attrs);
    });
  };  

  getPointBorderColor(point) {
    const {
      sets, leftSetParams, rightSetParams, checkPoint,
    } = this.props;
    const checkedPoint = checkPoint(point, sets);

    const intersectWithLeftSet = isIntersectWithCircle(point, leftSetParams);
    const intersectWithRightSet = isIntersectWithCircle(point, rightSetParams);

    let bordersColor = Stage.FAILED_COLOR;

    const successWith = {
      intersect: checkedPoint === 2 && intersectWithLeftSet && intersectWithRightSet,
      rightSet: checkedPoint === 1 && intersectWithRightSet && !intersectWithLeftSet,
      leftSet: checkedPoint === 0 && intersectWithLeftSet && !intersectWithRightSet,
      outside: checkedPoint === -1 && !intersectWithLeftSet && !intersectWithRightSet,
    };

    if (
      successWith.intersect
      || successWith.leftSet
      || successWith.rightSet
      || successWith.outside
    ) {
      bordersColor = Stage.SUCCESS_COLOR;
    }

    return bordersColor;
  }

  render() {
    const {
      leftSetParams,
      rightSetParams,
      points,
      scaleMultiplier,
      sets,
      onCheckClick,
      onTestPointsClick,
      isPreview,
    } = this.props;
    return (
      <div>
        <div className={classnames({ 'u-hide': isPreview})}>
          <Button href="/" isBackButton className={styles.controlButton}>
            Назад
          </Button>
          <Button className={styles.controlButton} onClick={onTestPointsClick}>
            Установить тестовые точки
          </Button>
          <Button className={styles.controlButton} success onClick={onCheckClick}>
            Проверить
          </Button>
        </div>

        <div className={styles.stage}>
          <SetsStage
            forwardedRef={this.stage}
            leftSetParams={{ ...leftSetParams, ...sets.leftSet }}
            rightSetParams={{ ...rightSetParams, ...sets.rightSet }}
          >
            {points.map((point, index) => (
              <KonvaPoint
                {...point}
                isSuccess={point.isSuccess || isPreview}
                key={index}
                id={point.id}
                color={point.color}
                bordersColor={this.getPointBorderColor(point)}
                shape={point.shape}
                x={point.x}
                y={point.y}
                scaleMultiplier={scaleMultiplier}
              />
            ))}
          </SetsStage>
        </div>
      </div>
    );
  }
}
