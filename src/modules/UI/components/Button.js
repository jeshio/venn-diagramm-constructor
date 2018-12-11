import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { classNameByProp, addClassName } from 'hocs';
import styles from './button.module.scss';
import { Link } from '.';

/* eslint-disable react/button-has-type */
const Button = ({
  href, type, secondary, isBackLink, isBackButton, ...props
}) => (href || isBackLink || isBackButton ? (
  <Link {...props} isBackLink={isBackLink || isBackButton} href={href} />
) : (
  <button type={type} {...props} />
));

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  secondary: PropTypes.bool,
  className: PropTypes.string,
  isBackLink: PropTypes.bool,
  isBackButton: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  secondary: false,
  className: '',
  isBackLink: false,
  isBackButton: false,
};

export default compose(
  classNameByProp(styles.secondary, 'secondary'),
  addClassName(styles.self),
)(Button);
