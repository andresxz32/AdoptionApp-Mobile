import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  dogs: Array<Object> = Constants.dogs;
  select: string = 'dogs';
  optionMenu: string;

  constructor(private _token: TokenService) { }

  ngOnInit(): void {
    this._token.getToken();
  }

  selectFilter(filter: string) {
    this.select = filter;
  }

}
