import { createReducer, on } from '@ngrx/store';
import { Menu } from 'src/app/shared/models/menu.model';
import { selectMenu } from '../actions/menu.action';


export const initialState: Menu = {
   menu: 'Home',
}

const _menuReducer = createReducer(initialState,
    on(selectMenu, (state,{menu}) => ({...state,menu:menu}))
);

export function menuReducer(state, action) {
    return _menuReducer(state, action);
}