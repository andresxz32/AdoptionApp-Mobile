import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { MenuComponent } from './menu/menu.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { ChatsComponent } from './chats/chats.component';


@NgModule({
  declarations: [HomeMainComponent, DogsListComponent, CatsListComponent,MenuComponent,ChatsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
