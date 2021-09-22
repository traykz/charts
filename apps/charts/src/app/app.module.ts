import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';



import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@mikel/material';

import { AppComponent } from './app.component';


import { GraficaComponent } from './grafica/grafica.component';

import { PiechartComponent } from './piechart/piechart.component';


import { SearchPipe } from './search.pipe';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GraficaComponent,
    SearchPipe,
    PiechartComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

