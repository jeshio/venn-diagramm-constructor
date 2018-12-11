import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as builderStore from 'modules/Builder/store';

export default combineReducers({
  form: formReducer,
  builder: builderStore.reducer,
});
