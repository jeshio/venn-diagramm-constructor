import reducer from './reducer';
import * as actions from './actions';
import actionTypes from './actionTypes';

export const initialState = {
  pointsPositions: [],
};

export default reducer;

export const getStore = state => ({ ...state.stage });

export const selectors = state => ({
  ...getStore(state),
});

export { actions, actionTypes, reducer };
