import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPreviewRoutingModule } from './info-preview-routing.module';

import { CreateHistoryComponent } from './create-history/create-history.component';
import { FindFriendComponent } from './find-friend/find-friend.component';


@NgModule({
  declarations: [CreateHistoryComponent, FindFriendComponent],
  imports: [
    CommonModule,
    InfoPreviewRoutingModule
  ]
})
export class InfoPreviewModule { }
