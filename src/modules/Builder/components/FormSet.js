import React from 'react';
import PropTypes from 'prop-types';
import { FormSection } from 'redux-form';
import { Select } from 'ui-components';
import styles from './formSet.module.scss';

const formatForSelect = items => items.map(({ title, name }) => ({ title, value: name }));

const FormSet = ({
  title,
  pointColors,
  pointShapes,
  sectionName,
  shapeDisabled,
  colorDisabled,
}) => (
  <FormSection name={sectionName} className={styles.self}>
    {title}
    <div>
      <Select
        name="shape"
        disabled={shapeDisabled}
        placeholder="Форма"
        items={formatForSelect(pointShapes)}
        className={styles.select}
      />
      <Select
        name="color"
        disabled={colorDisabled}
        placeholder="Цвет"
        items={formatForSelect(pointColors)}
        className={styles.select}
      />
    </div>
  </FormSection>
);

FormSet.propTypes = {
  shapeDisabled: PropTypes.bool.isRequired,
  colorDisabled: PropTypes.bool.isRequired,
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pointShapes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  pointColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default FormSet;
