import React from 'react';
import classnames from 'classnames';

/**
 * Add className without overriding
 */
export default addableClassName => Component => ({ className, ...props }) => (
  <Component {...props} className={classnames(addableClassName, className)} />
);
