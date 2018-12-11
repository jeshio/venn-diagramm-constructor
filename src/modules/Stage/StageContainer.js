import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Components from './components';

export class StageContainer extends Component {
  static propTypes = {};

  render() {
    return <Components.Stage />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageContainer);
