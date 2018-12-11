import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-components';

const Builder = ({ formComponent, submitForm }) => (
  <div>
    <h1>Конструктор</h1>

    {formComponent}

    <Button onClick={submitForm}>Запустить задание</Button>
  </div>
);

Builder.propTypes = {
  submitForm: PropTypes.func.isRequired,
  formComponent: PropTypes.node.isRequired,
};

export default Builder;
