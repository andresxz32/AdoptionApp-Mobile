import { ActionReducerMap } from '@ngrx/store';
import * as menu from './ngrx/reducers/menu.reducer';
import { Menu } from './shared/models/menu.model';


export interface AppState {
    menu: Menu
}



export const appReducers: ActionReducerMap<AppState> = {
    menu: menu.menuReducer
}