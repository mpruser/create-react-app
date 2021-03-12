import { createStore, compose } from 'redux';
import merge from 'lodash/merge';

import reducer, { initialState } from '@/ducks';

/** 개발환경 세팅 */
const isDev = process.env.NODE_ENV !== 'production';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/** CreateStore */
export default (additionalState = {}) => {
  /** 개발환경에 따른 compose */
  const composeEnhancer = (isDev && devTools) || compose;
  /** 스토어 생성 */
  const store = createStore(
    reducer,
    merge(initialState, additionalState),
    composeEnhancer(),
  );

  return store;
};
