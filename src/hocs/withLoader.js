import React from 'react';
import Loader from 'react-loaders';
import 'loaders.css/src/animations/ball-pulse.scss';

/**
 * Add loader by prop [loadingPropName]
 */
export default (loadingPropName = 'loading') => Component => (props) => {
  const isLoading = props[loadingPropName];

  const wrapperStyle = {
    position: 'relative',
  };
  const lockLayerStyle = {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    width: '100%',
    height: '100%',
    display: isLoading ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  };

  return (
    <div className="o-wide" style={isLoading ? wrapperStyle : {}}>
      <div style={lockLayerStyle}>
        <Loader type="ball-pulse" active={isLoading} color="#2769cd" />
      </div>
      <Component {...props} />
    </div>
  );
};
