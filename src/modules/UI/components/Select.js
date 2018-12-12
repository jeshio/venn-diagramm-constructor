import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addClassName } from 'hocs';
import styles from './select.module.scss';
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
    className: PropTypes.string.isRequired,
  };

  static defaultProps = {
    placeholder: '',
    setError: () => {},
  };

  render() {
    const {
      input, items, placeholder, setError, className, ...props
    } = this.props;
    return (
      <select {...props} {...input} className={className}>
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

export default addClassName(styles.self)(props => <ReduxField {...props} Component={Select} />);
