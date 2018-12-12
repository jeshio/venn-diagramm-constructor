import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-components';

const Builder = ({ formComponent, submitForm, formHasErrors }) => (
  <div>
    <h1>Конструктор</h1>

    {formComponent}

    <Button onClick={submitForm} disabled={formHasErrors} success>
      Запустить задание
    </Button>
  </div>
);

Builder.propTypes = {
  submitForm: PropTypes.func.isRequired,
  formComponent: PropTypes.node.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
};

export default Builder;
