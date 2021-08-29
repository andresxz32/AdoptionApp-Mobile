import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { MenuComponent } from './menu/menu.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [HomeMainComponent, MenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    InfiniteScrollModule
  ],
})
export class HomeModule { }


