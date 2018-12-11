import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Components from './components';
import { POINT_SHAPES, POINT_COLORS } from './constants';

export class BuilderContainer extends Component {
  static propTypes = {};

  static FORM_NAME = 'BUILDER_FORM';

  render() {
    return (
      <Components.Builder
        formComponent={(
          <Components.Form
            PointComponent={Components.FormPoint}
            SetComponent={Components.FormSet}
            formName={BuilderContainer.FORM_NAME}
            pointColors={POINT_COLORS}
            pointShapes={POINT_SHAPES}
          />
)}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuilderContainer);
