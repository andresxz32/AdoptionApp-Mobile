import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  select: string = 'Home'
  buttons: Array<Object> = Constants.buttons;
  constructor(private _router: Router) {

  }

  ngOnInit(): void {
  }

  selectItem(menu: string, title: string) {
    this.select = title;
    this._router.navigate([`/home/${menu}`]);
  }

}
