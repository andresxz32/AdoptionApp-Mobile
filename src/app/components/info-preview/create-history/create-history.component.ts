import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-history',
  templateUrl: './create-history.component.html',
  styleUrls: ['./create-history.component.scss']
})
export class CreateHistoryComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  next(){
    this._router.navigateByUrl('home');
  }

}
