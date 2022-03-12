import { GAME_ACTIONS } from '../actions/games';

const initialState = {
  gamesList: {},
};

const SUCCESS_GET_GAMES = (state: any, { payload }: any) => {
  return {
    ...state,
    status: 'successful',
    gamesList: payload
  };
};

export default (state: any = initialState, action: any) => {
  switch (action.type) {
  case GAME_ACTIONS.SUCCESS_GET_GAMES:
    return SUCCESS_GET_GAMES(state, action);
  default:
    return state;
  }
};