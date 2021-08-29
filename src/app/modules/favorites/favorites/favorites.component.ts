import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Array<Object> = Constants.favorites;
  constructor() { }

  ngOnInit(): void {
  }

}
