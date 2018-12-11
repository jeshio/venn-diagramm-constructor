import React from 'react';
import PropTypes from 'prop-types';
import { tryFunc } from 'utils';
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
  formValues,
}) => {
  const leftSetDisabledFields = {
    shape:
      !!tryFunc(() => formValues.sets.leftSet.color)
      || !!tryFunc(() => formValues.sets.rightSet.shape),
    color:
      !!tryFunc(() => formValues.sets.leftSet.shape)
      || !!tryFunc(() => formValues.sets.rightSet.color),
  };
  const rightSetDisabledFields = {
    shape:
      !!tryFunc(() => formValues.sets.rightSet.color)
      || !!tryFunc(() => formValues.sets.leftSet.shape),
    color:
      !!tryFunc(() => formValues.sets.rightSet.shape)
      || !!tryFunc(() => formValues.sets.leftSet.color),
  };
  console.log(leftSetDisabledFields, rightSetDisabledFields);

  return (
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
          shapeDisabled={leftSetDisabledFields.shape}
          colorDisabled={leftSetDisabledFields.color}
        />
        <SetComponent
          sectionName="sets[rightSet]"
          title="Правое множество"
          pointShapes={pointShapes}
          pointColors={pointColors}
          shapeDisabled={rightSetDisabledFields.shape}
          colorDisabled={rightSetDisabledFields.color}
        />
      </div>
    </UIForm>
  );
};

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
  formValues: PropTypes.shape({}).isRequired,
};

export default Form;
