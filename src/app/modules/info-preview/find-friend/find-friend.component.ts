import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.scss']
})
export class FindFriendComponent implements OnInit {

  constructor(private _router: Router, private _token: TokenService) { }

  ngOnInit(): void {
    this._token.getToken();
  }

  next() {
    this._router.navigateByUrl('loading/create-history');
  }

}
