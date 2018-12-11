import React from 'react';
import PropTypes from 'prop-types';
import { FormSection } from 'redux-form';
import { Select, Checkbox } from 'ui-components';

const formatForSelect = items => items.map(({ title, name }) => ({ title, value: name }));

const FormPoint = ({ pointShapes, pointColors, sectionName }) => (
  <FormSection name={sectionName}>
    <Select name="shape" placeholder="Форма" items={formatForSelect(pointShapes)} />
    <Select name="color" placeholder="Цвет" items={formatForSelect(pointColors)} />
    <Checkbox name="isSuccess">уже решён</Checkbox>
  </FormSection>
);

FormPoint.propTypes = {
  sectionName: PropTypes.string.isRequired,
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

export default FormPoint;
