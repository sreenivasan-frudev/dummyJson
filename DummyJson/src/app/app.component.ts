import { Component, OnInit } from '@angular/core';
import { getUsersState } from './ngrxTools/get.state';
import { Store } from '@ngrx/store';
import { AddUsers } from './ngrxTools/get.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private store:Store<getUsersState>){

}

ngOnInit(){
this.store.dispatch(AddUsers())
}



}
