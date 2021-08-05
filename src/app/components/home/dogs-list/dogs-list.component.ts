import { Component, OnInit } from '@angular/core';
import { Functions } from 'src/app/functions/functions';
import { PetFindService } from 'src/app/services/pet-find.service';
@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  dogs: Array<Object> = [];
  page: number = 1;
  dogsAux: Array<Object> = [];
  loading: boolean = true;
  constructor(private _service: PetFindService) { }

  ngOnInit(): void {
    this.getDogs(this.page);
  }

  getDogs(page): void {
    this._service.getDogs(page).subscribe(response => {
      this.dogs = this.removeDuplicates(this.dogs.concat(response))
      this.loading = false;
    });
  }

  onScroll(): void {
    this.loading = true;
    this.getDogs(this.page++);
  }

  removeDuplicates(array) {
    return Functions.run().removeDuplicates(array);
  }
}
