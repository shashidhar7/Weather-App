import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
// services
import { WeatherService } from '../services/weather.service';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnInit {

  // public cityModelChanged: Subject<string> = new Subject<string>();
  // private cityModelChangeSubscription: any
  globalSearchTerm$ = new Subject<string>();
  weatherInfo: any;
  cityName: any;
  date: any;
  constructor(private weatherSvc: WeatherService,
    private toastr: ToastrService) {
    this.weatherInfo = {
      name: '',
      weather: '',
      main: '',
      description: '',
      feels_like: '',
      temp: ''
    };
    this.globalSerachServiceBind();

  }

  ngOnInit() {
    // this.cityModelChangeSubscription = this.cityModelChanged
    //   .pipe(
    //     debounceTime(500),
    //     distinctUntilChanged()
    //   )
    //   .subscribe(cityName => {
    //     this.weatherSvc.getWeatherForCity(cityName)
    //       .subscribe((response: any) => {
    //         this.weatherInfo = response;
    //         console.log(this.weatherInfo);
    //         this.date = moment(new Date()).format("DD MMMM yyyy");
    //       }, error => {
    //         this.toastr.error(error.error.message);
    //       })
    //   });
  }

  // getWeatherInfoBy(cityName: any) {
  //   this.cityModelChanged.next(cityName);
  // }

  // call destroy the city model subscription
  // ngOnDestroy() {
  //   this.cityModelChangeSubscription.unsubscripe();
  // }

  globalSerachServiceBind() {
    this.weatherSvc.globalSearch(this.globalSearchTerm$)
      .subscribe((results: any) => {
        this.weatherInfo = results;
        this.weatherInfo.name = results.name;
        this.weatherInfo.weather = results.weather[0].main;
        this.weatherInfo.description = results.weather[0].description;
        this.weatherInfo.feels_like = results.main.feels_like;
        this.weatherInfo.temp = results.main.temp;

        console.log(this.weatherInfo);
        this.date = moment(new Date()).format("DD MMMM yyyy");
      }, (err: any) => {
        this.clearInput();
        console.log("error blc")
      });
  }

  clearInput() {
    this.weatherInfo = {
      name: '',
      weather: '',
      main: '',
      description: '',
      feels_like: '',
      temp: ''
    };
    this.cityName = '';
  }

  searchItem() {
    if (this.cityName.length > 0) {
      this.globalSearchTerm$.next(this.cityName);
    }
  }

}
