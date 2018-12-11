import { actionTypesWithModuleName } from 'helpers';
import { NAME } from '../constants';

const actionTypes = {
  SET_POINTS: 'SET_POINTS',
  SET_SETS: 'SET_SETS',
  ADD_POINT: 'ADD_POINT',
  REMOVE_POINT: 'REMOVE_POINT',
};

export default actionTypesWithModuleName(actionTypes, NAME);
