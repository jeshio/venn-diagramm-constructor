import actionTypes from './actionTypes';
import { initialState } from '.';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POINTS_POSITIONS:
      return {
        ...state,
        pointsPositions: action.payload,
      };
    case actionTypes.SET_POINT_POSITION: {
      const {
        id,
        position: { x, y },
      } = action.payload;

      const pointsPositions = state.pointsPositions.map((pointPosition) => {
        if (pointPosition.id !== id) return pointPosition;

        return { ...pointPosition, x, y };
      });

      return {
        ...state,
        pointsPositions,
      };
    }
    default:
      return state;
  }
};
