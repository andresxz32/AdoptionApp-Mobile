import { Component, OnDestroy, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';
import { Store } from "@ngrx/store";
import { AppState } from 'src/app/app.reducer';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit, OnDestroy {
  dogs: Array<Object> = Constants.dogs;
  select: string = 'dogs';
  optionMenu: string;
  onDestroy$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.startSub();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete()
  }

  startSub() {
    this.store.select('menu').pipe(takeUntil(this.onDestroy$)).subscribe(({ menu }) => {
      this.optionMenu = menu;
    })
  }

  selectFilter(filter: string) {
    this.select = filter;

  }

}
