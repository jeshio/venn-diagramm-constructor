import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReduxField } from '.';

class Input extends PureComponent {
  static contextTypes = {
    changeFieldValue: PropTypes.func.isRequired,
  };

  static propTypes = {
    meta: PropTypes.shape({
      error: PropTypes.string,
    }).isRequired,
    type: PropTypes.string,
    isNumber: PropTypes.bool,
    initialValue: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({}),
    ]),
    validation: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    setError: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    isNumber: false,
    initialValue: '',
    validation: '',
    onChange: () => {},
    setError: () => {},
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { initialValue, name, input } = this.props;
    const { value } = input;

    if (initialValue !== '' && value === '') {
      const { changeFieldValue } = this.context;
      changeFieldValue(name, initialValue);
    }
  }

  componentDidUpdate = (prevProps) => {
    const { meta, setError } = this.props;

    if (meta.error !== prevProps.meta.error || meta.submitFailed !== prevProps.meta.submitFailed) {
      setError(meta.error);
    }
  };

  onChange(e) {
    const { input, onChange } = this.props;
    const { changeFieldValue } = this.context;
    input.onChange(e);
    onChange(e, changeFieldValue);
  }

  render() {
    const {
      input, isNumber, type, initialValue, meta, setError, ...props
    } = this.props;
    const inputType = (isNumber && 'number') || type;

    if (type === 'checkbox') {
      return (
        <input
          {...props}
          {...input}
          type={inputType}
          {...(type === 'checkbox' ? { checked: input.value } : {})}
          onChange={this.onChange}
        />
      );
    }

    return <input {...props} {...input} type={inputType} onChange={this.onChange} />;
  }
}

export default props => <ReduxField {...props} Component={Input} />;
