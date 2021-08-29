import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PetsComponent } from './pets/pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { CatsListComponent } from './cats-list/cats-list.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';


@NgModule({
    declarations: [PetsComponent,CatsListComponent,DogsListComponent],
    imports: [
        CommonModule,
        PetsRoutingModule,
        InfiniteScrollModule
    ],
})
export class PetsModule { }