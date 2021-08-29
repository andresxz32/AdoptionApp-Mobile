import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';


@NgModule({
    declarations: [FavoritesComponent],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        InfiniteScrollModule
    ],
})
export class FavoritesModule { }