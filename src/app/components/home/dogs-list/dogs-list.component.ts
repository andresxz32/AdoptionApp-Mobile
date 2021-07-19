import { Component, OnInit } from '@angular/core';
import { PetFindService } from 'src/app/services/pet-find.service';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  dogs;
  constructor(private _service: PetFindService,) { }

  ngOnInit(): void {
    this._service.getDogs().subscribe(res =>{
      console.log(res)
      this.dogs = res['animals']
    } );
  }

}
