import { Component, Input, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherDetailsComponent } from './weather.component';
import { IWeatherResult } from './WeatherResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class WeatherComponent {
	title = 'Weather Cat';
	weatherForm;
	results: IWeatherResult;
	showResults: boolean = false;
	
	@ViewChild(WeatherDetailsComponent, {static: true}) details;
	
	constructor(private http:HttpClient, private formBuilder:FormBuilder) {
		this.weatherForm = this.formBuilder.group({
			zip: ''
		});
	}
  
	zipSubmit(event) 
	{
		let zip = event.target.value;
		// use proxy to get around cross-site origin stuff for client-side submit
		// you'd never do this in production, opting instead to use a server side api call, but in the interest of time...
		let uri = 'https://api.openweathermap.org/data/2.5/weather?appid=62e22018eeed34e8fdd41174de9a8fb0&zip='+zip+',us&units=imperial';
		if(/^(\d{5})$/.test(zip)){
			// zip is valid, so set the data via http request
			this.setWeatherData(uri);
		}
	}
	
	setWeatherData(uri: string) 
	{
		return this.http.get<IWeatherResult>(uri)
			.subscribe(response => {
				this.results = <IWeatherResult>response;			
				this.showResults = true;
				return <IWeatherResult>response;
			});		
	}
}
