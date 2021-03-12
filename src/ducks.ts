// import { combineReducers } from 'redux';

/** action type */
export enum ACTION_TYPES {
  REQUEST = 'ACTION_TYPES_REQUEST',
  SUCCESS = 'ACTION_TYPES_SUCCESS',
  FAILURE = 'ACTION_TYPES_FAILURE',
}

/** action creater */
export const actionCreater = {
  request: (payload: any) => ({ type: ACTION_TYPES.REQUEST, payload }),
  success: (payload: any) => ({ type: ACTION_TYPES.SUCCESS, payload }),
  failure: (payload: any) => ({ type: ACTION_TYPES.FAILURE, payload }),
};

/** action creater의 반환 타입 */
export type TAction =
  | ReturnType<typeof actionCreater.request>
  | ReturnType<typeof actionCreater.success>
  | ReturnType<typeof actionCreater.failure>;

/** store에 정장될 state 인터페이스 */
export interface IState { }
/** store에 정장될 state */
export const initialState: IState = {};

/** reducer */
export default function reducer(state = initialState, action: TAction): IState {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SUCCESS:
      return { ...state, ...payload };
    case ACTION_TYPES.FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
