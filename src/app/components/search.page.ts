import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { NavController } from "@ionic/angular";
import * as fromGameActions from "../actions/game.actions";
import { Game } from "../models/game.model";
import { ModalController } from "@ionic/angular";
import { GameModal } from "./game.modal";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "search-page",
  templateUrl: "search.page.html",
  styleUrls: ["search.page.scss"]
})
export class SearchPage {
  public games$: Observable<Array<Game>>;
  public searchTerm: string;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
    private store: Store<any>
  ) {
    this.games$ = this.store.select("games");
    this.initializeApp();
  }

  async presentModal(game: Game) {
    const modal = await this.modalController.create({
      component: GameModal,
      componentProps: {game}
    });
    return await modal.present();
  }

  search() {
    this.store.dispatch(new fromGameActions.GameSearchAction(this.searchTerm));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
