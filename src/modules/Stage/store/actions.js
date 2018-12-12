import actionTypes from './actionTypes';

export const setPointsPositions = pointsPositions => ({
  type: actionTypes.SET_POINTS_POSITIONS,
  payload: pointsPositions,
});

export const setPointPosition = (id, position) => ({
  type: actionTypes.SET_POINT_POSITION,
  payload: { id, position },
});
