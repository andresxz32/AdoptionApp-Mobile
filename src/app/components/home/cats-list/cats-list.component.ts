import { Component, OnInit } from '@angular/core';
import { Functions } from 'src/app/functions/functions';
import { PetFindService } from 'src/app/services/pet-find.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Array<Object> = [];
  page: number = 10;
  dogsAux: Array<Object> = [];
  loading: boolean = true;

  constructor(private _service: PetFindService) { }

  ngOnInit(): void {
    this.getCats(this.page);
  }

  getCats(page): void {
    this._service.getCats(page).subscribe(response => {
      if (response.length > 2) {
        this.cats = this.removeDuplicates(this.cats.concat(response))
        this.loading = false;
      } else{
        this.getCats(this.page++);
      }
    });
  }

  onScroll(): void {
    this.loading = true;
    this.getCats(this.page++);
  }


  removeDuplicates(array) {
    return Functions.run().removeDuplicates(array);
  }

}
