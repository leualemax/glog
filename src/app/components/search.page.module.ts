import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { GameModal } from "./game.modal";
import { SearchPage } from "./search.page";

@NgModule({
  entryComponents: [GameModal],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchPage
      }
    ])
  ],
  declarations: [SearchPage, GameModal]
})
export class SearchPageModule {}
