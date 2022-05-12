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
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged()
      , switchMap(term => this.getWeatherForCity(term)));
  }

  // get the city weather information
  getWeatherForCity(city: string) {
    //const path = `${environment.weath_info}${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    const path = `https://api.openweathermap.org/data/2.5/weather?q='${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path);
  }
}
