import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Game } from "../models/game.model";

@Injectable({
  providedIn: "root"
})
export class GiantBombService {
  public giantBombUrl: string = "https://www.giantbomb.com/api";
  public giantBombKey: string = "<API_KEY>";

  constructor(private http: HttpClient) {}

  searchGames(query: string): Observable<Array<Game>> {
    return this.http.get<Array<Game>>(
      `${this.giantBombUrl}/search/?format=json&api_key=${
        this.giantBombKey
      }&query=${query}&resources=game`
    );
  }
}
