import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './rootReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable-next-line */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const logger = createLogger();
  middlewares.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(connectRouter(history)(rootReducer), initialState, composedEnhancers);

export default store;
