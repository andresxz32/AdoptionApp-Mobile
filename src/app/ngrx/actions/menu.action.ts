import { createAction, props } from '@ngrx/store';
export const selectMenu = createAction(
    '[MENU Component] selectMenu',
    props<{ menu:string }>()
);