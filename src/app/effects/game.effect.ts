import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { GiantBombService } from "../services/giant-bomb.service";
import * as fromGameActions from "../actions/game.actions";

@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private giantBombService: GiantBombService) {}

  @Effect() search$ = this.actions$.pipe(
    ofType(fromGameActions.SEARCH_GAME),
    switchMap((action: fromGameActions.GameSearchAction) =>
      this.giantBombService.searchGames(action.payload).pipe(
        map((response: any) => {
          return new fromGameActions.GamesFillAction(response.results);
        }),
        catchError(err => {
          return of(console.log("search fail"));
        })
      )
    )
  );
}
