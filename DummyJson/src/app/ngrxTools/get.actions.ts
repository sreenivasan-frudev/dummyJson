import { createAction, props } from '@ngrx/store';

export const AddUsers = createAction(
  '[Users] Add Users'
);

export const AddUsersSuccess = createAction(
  '[Users] Add Users Success',
  props<{ data: any }>()
);

export const AddUsersFailure = createAction(
  '[Users] Add Users Failure',
  props<{ error: any }>()
);
