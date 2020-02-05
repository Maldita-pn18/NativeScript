import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { GridComponent } from "~/app/grid/grid.component";
import { SoccerplayerComponent } from "./soccerplayer/soccerplayer.component";
import { ArtistComponent } from "./artist/artist.component";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "grid", component: GridComponent},
    { path: "soccerplayer", component: SoccerplayerComponent},
    { path: "artist", component: ArtistComponent},
    {path : "dashboard", component : DashboardComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
