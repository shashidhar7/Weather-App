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

  globalSearchTerm$ = new Subject<string>();
  weatherInfo: any;
  cityName: any;
  date: any;
  constructor(private weatherSvc: WeatherService,
    private toastr: ToastrService) {
    this.intializeObj();
  }

  ngOnInit() {
    this.globalSerachServiceBind();
  }

  intializeObj() {
    this.weatherInfo = ''
  }

  globalSerachServiceBind() {
    this.weatherSvc.globalSearch(this.globalSearchTerm$)
      .subscribe((results: any) => {
        this.weatherInfo = results;
        this.cityName = this.weatherInfo.name;
        this.date = moment(new Date()).format("DD MMMM yyyy");
      }, (err: any) => {
        this.clearInput();
        this.globalSerachServiceBind();
        this.toastr.error(err.error.message);
      });
  }

  // search 
  searchItem(ev: any) {
    this.intializeObj();
    if (ev.target.value.length > 0) {
      this.globalSearchTerm$.next(this.cityName);
    }
  }

  // clear the object
  clearInput() {
    this.intializeObj();
    this.cityName = '';
  }
}
