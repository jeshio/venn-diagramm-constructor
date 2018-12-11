import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import isEqual from 'lodash/isEqual';

let lastInitialValues = {};

class Form extends Component {
  static childContextTypes = {
    changeFieldValue: PropTypes.func,
  };

  static propTypes = {
    change: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({}),
  };

  static defaultProps = {
    initialValues: {},
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getChildContext() {
    const { change } = this.props;
    return {
      changeFieldValue: change,
    };
  }

  shouldComponentUpdate = (nextProps) => {
    if (!isEqual(lastInitialValues, nextProps.initialValues)) {
      const { initialize } = nextProps;
      if (Object.keys(nextProps.initialValues).length > 0) {
        initialize(nextProps.initialValues);
        lastInitialValues = nextProps.initialValues;
      }
    }

    return true;
  };

  async onSubmit(data) {
    const { onSubmit, reset } = this.props;

    const result = await onSubmit(data);

    if (result === true) {
      reset();
    }
  }

  render() {
    const { handleSubmit, children, className } = this.props;

    return (
      <form className={className} noValidate onSubmit={handleSubmit(this.onSubmit)}>
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
};

const ReduxForm = ({
  name, initialValues, validate: _validate, validation, ...formProps
}) => {
  const validationFunc = values => Object.keys(validation).reduce((base, field) => {
    const error = validation[field](values[field], values);

    if (!error) return base;

    return { ...base, [field]: error };
  }, {});

  const validate = Object.keys(validation).length === 0 ? _validate : validationFunc;
  const ReduxFormComponent = reduxForm({
    form: name,
    destroyOnUnmount: false,
    initialValues,
    validate,
  })(props => <Form {...props} />);

  return <ReduxFormComponent {...formProps} initialValues={initialValues} />;
};

ReduxForm.propTypes = {
  name: PropTypes.string.isRequired,
  validation: PropTypes.shape({}),
  initialValues: PropTypes.shape({}),
  validate: PropTypes.func,
};

ReduxForm.defaultProps = {
  initialValues: {},
  validate: () => ({}),
  validation: {},
};

export default ReduxForm;
