import reducer from './reducer';
import * as actions from './actions';
import actionTypes from './actionTypes';

export const initialState = {
  points: [],
  sets: {
    leftSet: {},
    rightSet: {},
  },
};

export default reducer;

export const getStore = state => ({ ...state.builder });

export const selectors = state => ({
  ...getStore(state),
});

export { actions, actionTypes, reducer };
