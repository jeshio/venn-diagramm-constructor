import React from 'react';

/**
 * Add visible prop for visible controlling
 */
export default Component => ({ className, visible = true, ...props }) => (visible ? <Component {...props} visible={visible} /> : null);
