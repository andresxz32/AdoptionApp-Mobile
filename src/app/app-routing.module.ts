import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'loading', loadChildren: () =>
      import('./modules/info-preview/info-preview.module').then(m => m.InfoPreviewModule)
  },
  {
    path: 'home', loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
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
