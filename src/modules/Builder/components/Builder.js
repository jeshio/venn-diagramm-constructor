import React from 'react';
import PropTypes from 'prop-types';

const Builder = ({ formComponent }) => (
  <div>
    <h1>Конструктор</h1>

    {formComponent}
  </div>
);

Builder.propTypes = {
  formComponent: PropTypes.node.isRequired,
};

export default Builder;
