import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';


const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "pets", loadChildren: () => import('../pets/pets.module').then(m => m.PetsModule) },
      { path: "profile", loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
      { path: "chats", loadChildren: () => import('../chats/chats.module').then(m => m.ChatsModule) },
      { path: "favorites", loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
