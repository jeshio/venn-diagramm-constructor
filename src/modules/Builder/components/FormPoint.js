import React from 'react';
import PropTypes from 'prop-types';
import { FormSection } from 'redux-form';
import { Select, Checkbox, Button } from 'ui-components';

const formatForSelect = items => items.map(({ title, name }) => ({ title, value: name }));

const FormPoint = ({
  onRemovePoint, pointShapes, pointColors, sectionName, id, shape, color,
}) => (
  <FormSection name={sectionName}>
    <Select name="shape" placeholder="Форма" items={formatForSelect(pointShapes)} value={shape} />
    <Select name="color" placeholder="Цвет" items={formatForSelect(pointColors)} value={color} />
    <Checkbox name="isSuccess">уже определён</Checkbox>
    <Button onClick={() => onRemovePoint(id)}>x</Button>
  </FormSection>
);

FormPoint.propTypes = {
  onRemovePoint: PropTypes.func.isRequired,
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
  id: PropTypes.string.isRequired,
  shape: PropTypes.string,
  color: PropTypes.string,
};

FormPoint.defaultProps = {
  shape: '',
  color: '',
};

export default FormPoint;
