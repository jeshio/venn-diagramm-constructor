import { getRandomHash } from 'utils';
import actionTypes from './actionTypes';
import { initialState } from '.';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POINTS:
      return {
        ...state,
        points: action.payload,
      };
    case actionTypes.SET_SETS: {
      const { leftSet, rightSet } = action.payload;
      return {
        ...state,
        sets: { leftSet, rightSet },
      };
    }
    case actionTypes.ADD_POINT: {
      const point = { id: getRandomHash() };
      const points = [...state.points, point];

      return {
        ...state,
        points,
      };
    }
    case actionTypes.REMOVE_POINT: {
      const { id } = action.payload;
      const points = state.points.filter(point => point.id !== id);

      return {
        ...state,
        points,
      };
    }
    default:
      return state;
  }
};
