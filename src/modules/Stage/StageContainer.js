import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as builderStore from 'modules/Builder/store';
import { generatePositions, setStartPositionForPoint, checkPoint } from './helpers/index';
import * as stageStore from './store';
import * as Components from './components';

export class StageContainer extends Component {
  static propTypes = {
    // actions
    setPointsPositions: PropTypes.func.isRequired,
    setPointPosition: PropTypes.func.isRequired,
    // selectors
    pointsPositions: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    this.state = {
      scaleMultiplier: 0.5,
    };
  }

  componentDidMount = () => {
    // TODO update points position in store
    const { setPointsPositions } = this.props;
    setPointsPositions(this.generatePointsPositions());
  };

  generatePointsPositions() {
    const { props } = this;
    const getRandomPoint = (isSuccess) => {
      const shapeVal = Math.random();
      const colorVal = Math.random();
      return {
        shape: shapeVal < 1 / 3 ? 'circle' : shapeVal < 2 / 3 ? 'square' : 'triangle',
        color: colorVal < 1 / 3 ? 'red' : colorVal < 2 / 3 ? 'green' : 'blue',
        isSuccess,
      };
    };
    const freePoints = Array(7)
      .fill(7)
      .map(() => getRandomPoint(false));
    const successPoints = Array(4)
      .fill(4)
      .map(() => getRandomPoint(true));

    const points = [...freePoints, ...successPoints];
    const sets = {
      leftSet: {
        shape: 'circle',
      },
      rightSet: {
        color: 'red',
      },
    };

    const positions = generatePositions(
      StageContainer.leftSetParams,
      StageContainer.rightSetParams,
    );

    return points.map(point => setStartPositionForPoint(point, sets, positions));
  }

  render() {
    const { pointsPositions } = this.props;
    const { scaleMultiplier } = this.state;
    const sets = {
      leftSet: {
        shape: 'circle',
      },
      rightSet: {
        color: 'red',
      },
    };

    return (
      <Components.Stage
        sets={sets}
        leftSetParams={StageContainer.leftSetParams}
        rightSetParams={StageContainer.rightSetParams}
        points={pointsPositions}
        scaleMultiplier={scaleMultiplier}
        checkPoint={checkPoint}
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
