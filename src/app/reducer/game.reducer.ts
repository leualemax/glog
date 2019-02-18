import { GameListState } from "../models/game.model";
import * as fromGameActions from "../actions/game.actions";

export const INITIAL_STATE: GameListState = {
  list: []
};

export function gameReducer(
  state: GameListState = INITIAL_STATE,
  action: fromGameActions.GameActions
): GameListState {
  switch (action.type) {
    case fromGameActions.SEARCH_GAME:
      return state;
    case fromGameActions.FETCH_GAME:
      return {
        ...state,
        list: typeof action.payload == "string" ? state.list : action.payload
      };
    default:
      return state;
  }
}
