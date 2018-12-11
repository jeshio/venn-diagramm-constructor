import React from 'react';
import PropTypes from 'prop-types';
import { Form as UIForm } from 'ui-components';

const Form = ({
  formName, pointShapes, pointColors, PointComponent, SetComponent,
}) => (
  <UIForm name={formName}>
    <div>
      <PointComponent sectionName="points[0]" pointShapes={pointShapes} pointColors={pointColors} />
    </div>

    <div>
      <SetComponent
        sectionName="sets[0]"
        title="Левое множество"
        pointShapes={pointShapes}
        pointColors={pointColors}
      />
      <SetComponent
        sectionName="sets[1]"
        title="Правое множество"
        pointShapes={pointShapes}
        pointColors={pointColors}
      />
    </div>
  </UIForm>
);

Form.propTypes = {
  formName: PropTypes.string.isRequired,
  PointComponent: PropTypes.func.isRequired,
  SetComponent: PropTypes.func.isRequired,
  pointColors: PropTypes.arrayOf(PropTypes.object).isRequired,
  pointShapes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
