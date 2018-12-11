import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isIntersect } from './helpers';
import * as Components from './components';

export class StageContainer extends Component {
  static propTypes = {};

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

  componentDidMount = () => {
    // TODO update points position in store
    // TODO update points intersections
  };

  render() {
    return (
      <Components.Stage
        leftSetParams={StageContainer.leftSetParams}
        rightSetParams={StageContainer.rightSetParams}
        isIntersect={isIntersect}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageContainer);
