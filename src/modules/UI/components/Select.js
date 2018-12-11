import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ReduxField } from '.';

class Select extends PureComponent {
  static contextTypes = {
    changeFieldValue: PropTypes.func.isRequired,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ).isRequired,
    placeholder: PropTypes.string,
    setError: PropTypes.func,
  };

  static defaultProps = {
    placeholder: '',
    setError: () => {},
  };

  render() {
    const {
      input, items, placeholder, setError, ...props
    } = this.props;
    return (
      <select {...props} {...input}>
        <option value="">{placeholder}</option>
        {items.map(({ title, value }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
    );
  }
}

export default props => <ReduxField {...props} Component={Select} />;
