import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects/src';
import { UserEffects } from './ngrxTools/effects';
import { StoreModule } from '@ngrx/store';
import{reducer} from './ngrxTools/get.reducer'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    EffectsModule.forFeature([UserEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
