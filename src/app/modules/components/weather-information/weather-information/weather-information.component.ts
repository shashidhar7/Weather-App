import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime } from 'rxjs';
// modules
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormControl } from "@angular/forms";
// services
import { WeatherService } from '../services/weather.service';



@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {


  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];

  // @ts-ignore
  cityControl: FormControl;

  locationName: any;
  weatherInfo: any;
  cityName = '';
  constructor(private router: Router,
    private weatherSvc: WeatherService,
    private fb: FormBuilder) {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges
      .subscribe((value: any) => {
        console.log("val=", value);
        this.locationName = value;
        this.router.navigate([value]);
      });

  }

  ngOnInit() {

  }

  citySelected(value: any) {
    this.getWeatherInfoBy(value);
  }

  getWeatherInfoBy(locName: any) {
    debounceTime(400);
    this.weatherSvc.getWeatherForCity(locName)
      .subscribe((response: any) => {
        this.weatherInfo = response;
        console.log("res==", response)
      })
  }

  ngOnDestroy() {
  }

  clearInput() {
    this.weatherInfo = '';
    this.cityName = '';
  }

}
