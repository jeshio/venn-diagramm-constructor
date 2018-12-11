import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import { Input } from '.';

export default class Checkbox extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
  };

  static defaultProps = {
    children: '',
  };

  constructor(props) {
    super();
    this.state = {
      id: props.id || uniqueId('checkbox'),
    };
  }

  render() {
    const { children, ...props } = this.props;
    const { id } = this.state;

    return (
      <div>
        <Input {...props} id={id} type="checkbox" />
        <label htmlFor={id}>{children}</label>
      </div>
    );
  }
}
