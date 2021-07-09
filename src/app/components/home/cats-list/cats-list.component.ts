import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Array<Object> = Constants.cats;

  constructor() { }

  ngOnInit(): void {
  }

}
