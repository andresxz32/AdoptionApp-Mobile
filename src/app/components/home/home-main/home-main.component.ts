import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';
import { Action, Store } from "@ngrx/store";
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
  dogs: Array<Object> = Constants.dogs;
  select: string = 'dogs';
  optionMenu: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.startSub();
  }

  startSub(){
    this.store.select('menu').subscribe(({menu}) => {
      this.optionMenu = menu; 
    })
  }

  selectFilter(filter:string){
    this.select = filter;

  }

}
