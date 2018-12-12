import React from 'react';
import PropTypes from 'prop-types';
import { tryFunc } from 'utils';
import classnames from 'classnames';
import { Form as UIForm, Button } from 'ui-components';
import styles from './form.module.scss';

const fieldOfSetIsDisabled = (selfChecker, anotherChecker) => !!tryFunc(selfChecker) || !!tryFunc(anotherChecker);

const validation = {
  sets: sets => !sets
    || !tryFunc(() => sets.leftSet.shape || sets.leftSet.color)
    || !tryFunc(() => sets.rightSet.shape || sets.rightSet.color),
};

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
    shape: fieldOfSetIsDisabled(
      () => formValues.sets.leftSet.color,
      () => formValues.sets.rightSet.shape,
    ),
    color: fieldOfSetIsDisabled(
      () => formValues.sets.leftSet.shape,
      () => formValues.sets.rightSet.color,
    ),
  };
  const rightSetDisabledFields = {
    shape: fieldOfSetIsDisabled(
      () => formValues.sets.rightSet.color,
      () => formValues.sets.leftSet.shape,
    ),
    color: fieldOfSetIsDisabled(
      () => formValues.sets.rightSet.shape,
      () => formValues.sets.leftSet.color,
    ),
  };

  return (
    <UIForm name={formName} onSubmit={onSubmitForm} validation={validation}>
      <div className={styles.section}>
        {points.map(point => (
          <PointComponent
            {...point}
            sectionName={`points[${point.id}]`}
            pointShapes={pointShapes}
            pointColors={pointColors}
            onRemovePoint={onRemovePoint}
          />
        ))}
        <div className={classnames(styles.emptyList, { 'u-hide': points.length > 0 })}>
          Список фигур пуст.
        </div>
        <Button onClick={onAddPoint} className={styles.addPointButton}>
          Добавить
        </Button>
      </div>

      <div className={styles.section}>
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
