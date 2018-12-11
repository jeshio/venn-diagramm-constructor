import { string } from 'prop-types';
import * as React from 'react';
import styles from './list.module.scss';

const List = ({
  items, itemClassName, className, ...props
}) => (
  <ul {...props} className={`${styles.self} ${className} u-override`}>
    {items.map((item, index) => (
      <li className={`${styles.item} ${itemClassName} u-override`} key={index}>
        {item}
      </li>
    ))}
  </ul>
);

List.defaultProps = {
  className: '',
  itemClassName: '',
};

export default List;
