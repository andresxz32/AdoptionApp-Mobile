import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Constants } from 'src/app/shared/constants/constants';
import * as action from '../../../ngrx/actions/menu.action';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,OnDestroy {
  select: string = 'Home'
  buttons: Array<Object> = Constants.buttons;
  constructor(private _store:Store<AppState>) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

  selectItem(menu:string){
    this.select = menu
    this._store.dispatch(action.selectMenu({menu:menu}));

  }

}
