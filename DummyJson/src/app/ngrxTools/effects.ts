import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { AddUsers } from './get.actions';
import{mergeMap,map} from 'rxjs/operators'

@Injectable()

export class UserEffects {
  constructor(private actions$:Actions,private usersService:UsersService){}
    loadusers$=createEffect(()=>{
      return this.actions$.pipe(ofType(AddUsers)),mergeMap((action)=>{
      return this.usersService.getUser().pipe(
        map((data)=>{
          console.log(data)
        })
      )
    })},
    {dispatch:false})

}
