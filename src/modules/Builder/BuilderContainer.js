import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { unregisterField as reduxFormUnregisterField, submit as reduxFormSubmit } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Components from './components';
import { POINT_SHAPES, POINT_COLORS } from './constants';
import * as builderStore from './store';

export class BuilderContainer extends Component {
  static propTypes = {
    // actions
    addPoint: PropTypes.func.isRequired,
    removePoint: PropTypes.func.isRequired,
    setSets: PropTypes.func.isRequired,
    setPoints: PropTypes.func.isRequired,
    unregisterField: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    // selectors
    points: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static FORM_NAME = 'BUILDER_FORM';

  constructor() {
    super();
    this.onRemovePoint = this.onRemovePoint.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onRemovePoint(id) {
    const { unregisterField, removePoint } = this.props;

    removePoint(id);

    unregisterField(`points[${id}]`);
  }

  onSubmitForm(values) {
    const { onSubmitForm } = this.props;
  }

  render() {
    const { addPoint, points, submit } = this.props;
    return (
      <Components.Builder
        formComponent={(
          <Components.Form
            PointComponent={Components.FormPoint}
            SetComponent={Components.FormSet}
            onAddPoint={addPoint}
            onRemovePoint={this.onRemovePoint}
            onSubmitForm={this.onSubmitForm}
            formName={BuilderContainer.FORM_NAME}
            pointColors={POINT_COLORS}
            pointShapes={POINT_SHAPES}
            points={points}
          />
)}
        submitForm={submit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const moduleSelectors = builderStore.selectors(state);
  return {
    ...moduleSelectors,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...builderStore.actions,
    unregisterField: field => reduxFormUnregisterField(BuilderContainer.FORM_NAME, field),
    submit: () => reduxFormSubmit(BuilderContainer.FORM_NAME),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuilderContainer);
