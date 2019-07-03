import { Component, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherComponent } from './app.component';
import { IWeatherResult } from './WeatherResult';

@Component({
	selector: 'weather-results',
	templateUrl: './weather.component.html',
	styleUrls: ['./app.component.css']
})
export class WeatherDetailsComponent {
	title = '';
  
	@Input() show: boolean;
	@Input() details: IWeatherResult;
	
	empty: boolean;
	
	constructor() {
		this.empty = this.show && !this.details;
	}
}
