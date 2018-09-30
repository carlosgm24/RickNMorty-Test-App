import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import {RnmapiService} from "./services/rnmapi.service";

import { Routes, RouterModule } from "@angular/router";
import {HttpModule} from "@angular/http";
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
  {path:'detalle/:id', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [RnmapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
