import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.scss']
})
export class FindFriendComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this._router.navigateByUrl('loading/create-history');
  }

}
