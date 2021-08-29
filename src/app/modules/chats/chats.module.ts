import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChatsComponent } from './chats/chats.component';
import { ChatsRoutingModule } from './chats-routing.module';


@NgModule({
    declarations: [ChatsComponent],
    imports: [
        CommonModule,
        ChatsRoutingModule,
        InfiniteScrollModule
    ],
})
export class ChatsModule { }