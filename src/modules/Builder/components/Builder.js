import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-components';
import styles from './builder.module.scss';

const Builder = ({
  formComponent, submitForm, formHasErrors, stageContainerComponent,
}) => (
  <div>
    <h1>Конструктор</h1>

    <div className={styles.content}>
      <div className={styles.contentItem}>
        {formComponent}
        <Button onClick={submitForm} disabled={formHasErrors} success>
          Запустить задание
        </Button>
      </div>
      <div className={styles.contentItem}>{stageContainerComponent}</div>
    </div>
  </div>
);

Builder.propTypes = {
  submitForm: PropTypes.func.isRequired,
  formComponent: PropTypes.node.isRequired,
  formHasErrors: PropTypes.bool.isRequired,
  stageContainerComponent: PropTypes.node.isRequired,
};

export default Builder;
