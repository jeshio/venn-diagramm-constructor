import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  getFormValues,
  unregisterField as reduxFormUnregisterField,
  submit as reduxFormSubmit,
  getFormSyncErrors,
} from 'redux-form';
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
    formHasErrors: PropTypes.bool.isRequired,
    formValues: PropTypes.shape({}),
  };

  static defaultProps = {
    formValues: {},
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
    const { setSets, setPoints, formHasErrors } = this.props;

    if (formHasErrors) return null;

    setSets(values.sets);

    const points = Object.keys(values.points || {}).map(id => ({ id, ...values.points[id] }));

    setPoints(points);

    return true;
  }

  render() {
    const {
      addPoint, points, submit, formHasErrors, formValues,
    } = this.props;
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
            formValues={formValues}
          />
)}
        submitForm={submit}
        formHasErrors={formHasErrors}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const moduleSelectors = builderStore.selectors(state);
  return {
    ...moduleSelectors,
    formValues: getFormValues(BuilderContainer.FORM_NAME)(state),
    formHasErrors: Object.keys(getFormSyncErrors(BuilderContainer.FORM_NAME)(state)).length > 0,
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
