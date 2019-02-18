import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Game } from "../models/game.model";

@Component({
  selector: "game-modal",
  templateUrl: "game.modal.html"
})
export class GameModal {
  public game: Game;

  constructor(public modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
