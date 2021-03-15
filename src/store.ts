import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import merge from 'lodash/merge';

import reducer, { initialState } from '@/ducks';
import sagas from '@/sagas';

/** 개발환경 세팅 */
const isDev = process.env.NODE_ENV !== 'production';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/** CreateStore */
export default (additionalState = {}) => {
  /** 개발환경에 따른 compose */
  const composeEnhancer = (isDev && devTools) || compose;
  /** saga 미들웨어 생성 */
  const sagaMiddleware = createSagaMiddleware();
  /** 스토어 생성 */
  const store = createStore(
    reducer,
    merge(initialState, additionalState),
    composeEnhancer(applyMiddleware(sagaMiddleware)),
  );
  // saga실행
  sagaMiddleware.run(sagas);
  return store;
};
