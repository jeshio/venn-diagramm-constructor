import { actionTypesWithModuleName } from 'helpers';
import { NAME } from '../constants';

const actionTypes = {
  SET_POINTS_POSITIONS: 'SET_POINTS_POSITIONS',
  SET_POINT_POSITION: 'SET_POINT_POSITION',
};

export default actionTypesWithModuleName(actionTypes, NAME);
