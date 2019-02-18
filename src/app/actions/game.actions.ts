import { Action, State } from "@ngrx/store";
import { Game, GameListState } from "../models/game.model";

export const SEARCH_GAME = "[GAMES] search a game";
export const FETCH_GAME = "[GAMES] fetch games from server";

export class GameSearchAction implements Action {
  type = SEARCH_GAME;
  constructor(public payload: string) {}
}

export class GamesFillAction implements Action {
  type = FETCH_GAME;
  constructor(public payload: Array<Game>) {}
}

export type GameActions = GamesFillAction | GameSearchAction;
