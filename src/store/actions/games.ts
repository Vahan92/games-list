
export const GAME_ACTIONS = {
  SUCCESS_GET_GAMES: '@GAME/SUCCESS_GET_GAMES',
  ATTEMPT_TO_GET_GAMES: '@GAME/ATTEMPT_TO_GET_GAMES',
};

export const attemptToGetGames = () => {
  return {
    type: GAME_ACTIONS.ATTEMPT_TO_GET_GAMES
  };
};

export const successGetGames = (payload: any) => {
  return {
    type: GAME_ACTIONS.SUCCESS_GET_GAMES,
    payload
  };
};
