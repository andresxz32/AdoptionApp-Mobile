import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {
  dogs: Array<Object> = Constants.dogs;

  constructor() { }

  ngOnInit(): void {
  }

}
