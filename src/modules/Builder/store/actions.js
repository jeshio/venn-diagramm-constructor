import actionTypes from './actionTypes';

export const setPoints = points => ({ type: actionTypes.SET_POINTS, payload: points });

export const setSets = (leftSet, rightSet) => ({
  type: actionTypes.SET_SETS,
  payload: { leftSet, rightSet },
});

export const addPoint = () => ({ type: actionTypes.ADD_POINT });
export const removePoint = id => ({ type: actionTypes.REMOVE_POINT, payload: { id } });
