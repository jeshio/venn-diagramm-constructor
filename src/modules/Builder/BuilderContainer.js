import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Components from './components';

export class BuilderContainer extends Component {
  static propTypes = {};

  render() {
    return <Components.Builder />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuilderContainer);
