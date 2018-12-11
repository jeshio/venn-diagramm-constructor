import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

export class ReduxField extends React.PureComponent {
  constructor(props) {
    super(props);
    const { Component } = props;
    this.state = {
      component: componentProps => <Component {...componentProps} />,
    };
  }

  render() {
    const { Component, ...fieldProps } = this.props;
    const { name } = fieldProps;
    const { component } = this.state;

    return <Field name={name} props={fieldProps} component={component} />;
  }
}

ReduxField.propTypes = {
  name: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
};

export default ReduxField;
