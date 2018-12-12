import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomHash } from 'utils';
import * as builderStore from 'modules/Builder/store';
import { POINT_COLORS, POINT_SHAPES } from 'modules/Builder/constants';
import {
  generatePositions,
  setStartPositionForPoint,
  checkPoint,
  checkPointHasIntersection,
} from './helpers/index';
import * as stageStore from './store';
import * as Components from './components';

export class StageContainer extends Component {
  static propTypes = {
    // actions
    setPointsPositions: PropTypes.func.isRequired,
    setPointPosition: PropTypes.func.isRequired,
    // selectors
    pointsPositions: PropTypes.arrayOf(PropTypes.object).isRequired,
    sets: PropTypes.shape({
      leftSet: PropTypes.object,
      rightSet: PropTypes.object,
    }),
  };

  static defaultProps = {
    sets: {
      leftSet: {
        shape: 'circle',
      },
      rightSet: {
        color: 'red',
      },
    },
  };

  static leftSetParams = {
    x: 210,
    y: 300,
    radius: 190,
  };

  static rightSetParams = {
    x: 390,
    y: 300,
    radius: 190,
  };

  constructor() {
    super();
    this.generatePointsPositions = this.generatePointsPositions.bind(this);
    this.onCheckClick = this.onCheckClick.bind(this);
    this.onTestPointsClick = this.onTestPointsClick.bind(this);
  }

  componentDidMount = () => {
    // TODO update points position in store
    const { setPointsPositions, points } = this.props;
    setPointsPositions(this.generatePointsPositions(points));
  };

  onCheckClick() {
    const { pointsPositions } = this.props;

    const errors = pointsPositions.reduce(
      (base, point) => (checkPointHasIntersection(point, this.sets) ? base : base + 1),
      0,
    );

    if (errors === 0) {
      alert('Вы выполнили задание!');
    } else {
      alert(`У вас ошибки в количестве ${errors} шт.`);
    }
  }

  onTestPointsClick() {
    const { setPointsPositions } = this.props;
    const points = [];

    POINT_COLORS.forEach(color => POINT_SHAPES.forEach(shape => points.push({
      id: getRandomHash(),
      shape: shape.name,
      color: color.name,
      isSuccess: false,
    })));

    setPointsPositions(this.generatePointsPositions(points));
  }

  get pointsScaleMultiplier() {
    const { pointsPositions } = this.props;

    return 0.5 + 0.5 / pointsPositions.length;
  }

  get sets() {
    const { sets } = this.props;
    return {
      leftSet: { ...sets.leftSet, ...StageContainer.leftSetParams },
      rightSet: { ...sets.rightSet, ...StageContainer.rightSetParams },
    };
  }

  generatePointsPositions(points) {
    const { sets } = this.props;

    const positions = generatePositions(
      StageContainer.leftSetParams,
      StageContainer.rightSetParams,
    );

    return points.map(point => setStartPositionForPoint(point, sets, positions));
  }

  render() {
    const { pointsPositions, sets, setPointPosition } = this.props;

    return (
      <Components.Stage
        sets={sets}
        leftSetParams={StageContainer.leftSetParams}
        rightSetParams={StageContainer.rightSetParams}
        points={pointsPositions}
        scaleMultiplier={this.pointsScaleMultiplier}
        checkPoint={checkPoint}
        onCheckClick={this.onCheckClick}
        onTestPointsClick={this.onTestPointsClick}
        setPointPosition={setPointPosition}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...builderStore.selectors(state),
  ...stageStore.selectors(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...builderStore.actions, ...stageStore.actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageContainer);
