import React from 'react';
import PropTypes from 'prop-types';
import styles from './app.module.scss';

const App = ({ topBarComponent, content }) => (
  <div className={styles.self}>
    {topBarComponent}

    <main className={styles.content}>{content}</main>
  </div>
);

App.propTypes = {
  topBarComponent: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default App;
