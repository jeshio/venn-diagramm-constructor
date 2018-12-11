import React from 'react';
import PropTypes from 'prop-types';
import { Form as UIForm, Button } from 'ui-components';

const Form = ({
  onAddPoint,
  onRemovePoint,
  onSubmitForm,
  formName,
  pointShapes,
  pointColors,
  PointComponent,
  SetComponent,
  points,
}) => (
  <UIForm name={formName} onSubmit={onSubmitForm}>
    <div>
      {points.map(point => (
        <PointComponent
          {...point}
          sectionName={`points[${point.id}]`}
          pointShapes={pointShapes}
          pointColors={pointColors}
          onRemovePoint={onRemovePoint}
        />
      ))}
      <Button onClick={onAddPoint}>Добавить</Button>
    </div>

    <div>
      <SetComponent
        sectionName="sets[leftSet]"
        title="Левое множество"
        pointShapes={pointShapes}
        pointColors={pointColors}
      />
      <SetComponent
        sectionName="sets[rightSet]"
        title="Правое множество"
        pointShapes={pointShapes}
        pointColors={pointColors}
      />
    </div>
  </UIForm>
);

Form.propTypes = {
  onAddPoint: PropTypes.func.isRequired,
  onRemovePoint: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  PointComponent: PropTypes.func.isRequired,
  SetComponent: PropTypes.func.isRequired,
  pointColors: PropTypes.arrayOf(PropTypes.object).isRequired,
  pointShapes: PropTypes.arrayOf(PropTypes.object).isRequired,
  points: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
