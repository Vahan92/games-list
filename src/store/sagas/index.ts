import { all } from 'redux-saga/effects';

import games from './games';

export default function* rootSaga() {
  yield all([
    games(),
  ]);
}