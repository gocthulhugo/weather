import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { WeatherComponent } from './app.component';
import { WeatherDetailsComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
	WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	ReactiveFormsModule,
	RouterModule.forRoot([
      { path: '', component: WeatherComponent }
    ])
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }
