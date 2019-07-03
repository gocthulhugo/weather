export interface IWeatherResult
{
	coord: ICoordinates;
	weather: IWeather[];
	base: string;
	main: ITemperature;
	visibility: number;
	wind: IWind;
	clouds: IClouds;
	dt: number;
	sys: ISystemData;
	id: number;
	name: string;
	cod: number;	
}

export interface ICoordinates
{
	lon: number;
	lat: number;
}

export interface IWeather
{
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface ITemperature
{
	temp: number;
	pressure: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
}

export interface IWind
{
	speed: number;
	deg: number;
	gust: number;
}

export interface IClouds
{
	all: number;
}

export interface ISystemData
{
	type: number;
	id: number;
	message: number;
	country: string;
	sunrise: number;
	sunset: number;
}