import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-components';
import { SetsStage, KonvaPoint } from 'ui-widgets';

const Stage = props => (
  <div>
    <Button href="/" isBackButton>
      Назад
    </Button>

    <SetsStage>
      <KonvaPoint shape="square" x={40} />
      <KonvaPoint shape="circle" x={120} />
      <KonvaPoint shape="triangle" x={200} />
    </SetsStage>
  </div>
);

Stage.propTypes = {};

export default Stage;
