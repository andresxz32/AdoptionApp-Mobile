import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHistoryComponent } from './create-history/create-history.component';
import { FindFriendComponent } from './find-friend/find-friend.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'create-history',
        component:CreateHistoryComponent
      },
      {
        path:'find-friend',
        component:FindFriendComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoPreviewRoutingModule { }
