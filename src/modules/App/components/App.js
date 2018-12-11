import React from 'react';
import PropTypes from 'prop-types';

const App = ({ topBarComponent, content }) => (
  <div>
    {topBarComponent}

    <main>{content}</main>
  </div>
);

App.propTypes = {
  topBarComponent: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default App;
