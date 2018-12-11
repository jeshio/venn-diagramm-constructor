import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { store as appStore } from 'modules/App';

export default combineReducers({
  form: formReducer,
  // app: appStore.reducers,
});
