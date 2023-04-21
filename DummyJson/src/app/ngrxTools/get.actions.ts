import { createAction, props } from '@ngrx/store';
import { UserData } from './user-data';

export const AddUsers = createAction(
  '[Users] Add Users',
);

export const AddUsersSuccess = createAction(
  '[Users] Add Users Success',
  props<{users:UserData[]}>()
);

export const AddUsersFailure = createAction(
  '[Users] Add Users Failure',
  props<{ error: any }>()
);
