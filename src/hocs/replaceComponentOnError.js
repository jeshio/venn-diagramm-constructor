import React from 'react';

/**
 * Replace component if error
 */
export default (ErrorComponent, errorPropName = 'crashError') => Component => ({
  [errorPropName]: error,
  ...props
}) => {
  if (error && Object.keys(error).length > 0) {
    return <ErrorComponent status={error.status} text={error.statusText} />;
  }

  return <Component {...props} />;
};
