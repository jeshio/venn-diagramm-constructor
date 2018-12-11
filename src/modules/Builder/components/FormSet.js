import React from 'react';
import PropTypes from 'prop-types';
import { FormSection } from 'redux-form';
import { Select } from 'ui-components';

const formatForSelect = items => items.map(({ title, name }) => ({ title, value: name }));

const FormSet = ({
  title, pointColors, pointShapes, sectionName,
}) => (
  <FormSection name={sectionName}>
    {title}
    <Select name="shape" placeholder="Форма" items={formatForSelect(pointShapes)} />
    <Select name="color" placeholder="Цвет" items={formatForSelect(pointColors)} />
  </FormSection>
);

FormSet.propTypes = {
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
