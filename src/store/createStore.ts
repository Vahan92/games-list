import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

/**
 * @param {Array} reducer - combined reducers
 * @param {Array} saga - combined sagas
 * @param {Array} middlewares - middlewares
 * @returns {Object} - store
 */

export default (reducer: any, saga: any, middlewares = []) => {
  const initialState = {};
  const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const sagaMiddleware = createSagaMiddleware();

  /**
   * @returns {Array} - middleware
   */
  const switchMode = () => {
    if (process.env.NODE_ENV === 'development') {
      return [sagaMiddleware, createLogger, ...middlewares];
    }

    return [sagaMiddleware, ...middlewares];
  };

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...switchMode()))
  );

  sagaMiddleware.run(saga);

  return store;
};
