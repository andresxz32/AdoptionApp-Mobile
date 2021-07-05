import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  dogs: Array<Object> = Constants.dogs;
  select: string = 'dogs';

  constructor() { }

  ngOnInit(): void {
  }

  selectFilter(filter:string){
    this.select = filter;

  }

}
