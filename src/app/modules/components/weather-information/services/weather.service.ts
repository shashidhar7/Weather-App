import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  globalSearch(terms: Observable<any>) {
    console.log("weather service==ter==", terms)
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged()
      , switchMap(term => this.getWeatherForCity(term)));
  }

  // get the city weather information
  getWeatherForCity(city: string) {
    console.log("getWeatherForCity=", city)
    const path = `${environment.weath_info}${city}&units=metric&APPID=${environment.APPId}`;
    return this.http.get(path);
  }
}
