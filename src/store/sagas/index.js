import { all, takeLatest } from 'redux-saga/effects';

import { addRepository, updateRepository } from './repositories';

export default function* rootSaga() {
  yield all([
    takeLatest('ADD_REPOSITORY_REQUEST', addRepository),
    takeLatest('UPDATE_REPOSITORY_REQUEST', updateRepository),
  ]);
}
