import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'loading', loadChildren: () =>
      import('./components/info-preview/info-preview.module').then(m => m.InfoPreviewModule)
  },
  {
    path: 'home', loadChildren: () =>
      import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'message', loadChildren: () =>
      import('./components/chat/messages.module').then(m => m.MessagesModule)
  },
  {
    path: '',
    redirectTo: 'loading/find-friend',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
