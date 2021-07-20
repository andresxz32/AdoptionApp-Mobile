import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PetFindService } from 'src/app/services/pet-find.service';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  @ViewChild('scroll', { static: true }) scroller: VirtualScrollerComponent;
  dogs: Array<Object> = [];
  page: number = 1;
  dogsAux: Array<Object> = [];
  constructor(private _service: PetFindService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getDogs(this.page);
  }

  getDogs(page) {
    this._service.getDogs(page).subscribe(response => {
      this.dogsAux = this.dogsAux.concat(response)
      if (this.dogsAux.length >= 50) {
        this.dogs = this.dogsAux;
      } else {
        this.getDogs(this.page++);
      }
    });

  }
}
