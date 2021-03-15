// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { all, call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';

function* watchRequest() {
  yield delay(1000);
  yield put({ type: 'ACTION_TYPES_SUCCESS' });
}

export default function* sagas() {
  yield takeLatest('ACTION_TYPES_REQUEST', watchRequest);
}
