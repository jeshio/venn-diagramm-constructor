import React from 'react';
import classnames from 'classnames';

/**
 * Add [addableClassName] className
 * if prop [propName]
 * is eual to [propValue]
 */
export default (addableClassName, propName, propValue = true) => Component => ({
  className,
  ...props
}) => (
  <Component
    {...props}
    className={classnames(className, {
      /* eslint-disable react/destructuring-assignment */
      [addableClassName]: props[propName] === propValue,
    })}
  />
);
