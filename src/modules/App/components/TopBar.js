import React from 'react';
import PropTypes from 'prop-types';
import { Link, List } from 'ui-components';
import styles from './topBar.module.scss';

const TopBar = props => (
  <nav className={styles.self}>
    <List
      items={[
        <Link className={styles.link} href="/">
          Конструктор
        </Link>,
        <Link className={styles.link} href="/stage">
          Задание
        </Link>,
      ]}
      className={styles.list}
      itemClassName={styles.item}
    />
  </nav>
);

TopBar.propTypes = {};

export default TopBar;
