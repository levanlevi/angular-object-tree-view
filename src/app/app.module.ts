import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgObjectTreeModule } from 'projects/ng-object-tree/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgObjectTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
