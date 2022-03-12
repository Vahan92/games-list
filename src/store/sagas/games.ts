import { put, takeLatest } from 'redux-saga/effects';

import { client } from '../../modules/request';
import { GAME_ACTIONS, successGetGames } from '../actions/games';

interface ResponseGenerator {
  data?: any,
}

function* getGames() {
  try {
    const data: ResponseGenerator = yield client.get('gamesList.json');
    yield put(successGetGames(data.data));
  } catch (err) {
    console.log(err);
  }
}

function* GamesSaga() {
  yield takeLatest(GAME_ACTIONS.ATTEMPT_TO_GET_GAMES, getGames);
}

export default GamesSaga;