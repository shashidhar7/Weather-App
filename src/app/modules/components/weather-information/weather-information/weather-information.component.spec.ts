import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WeatherInformationComponent } from './weather-information.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// services
import { ToastrModule } from 'ngx-toastr';
import { WeatherService } from '../services/weather.service';
import * as  Observable from 'rxjs';

describe('WeatherInformationComponent', () => {
  let component: WeatherInformationComponent;
  let httpMock: HttpTestingController;
  let toastr: ToastrModule;

  let fixture: ComponentFixture<WeatherInformationComponent>;
  let weatherSvc: WeatherService;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [WeatherInformationComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [WeatherService]
    })

    weatherSvc = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
    toastr = TestBed.inject(ToastrModule);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: WeatherService = TestBed.inject(WeatherService);
    expect(service).toBeTruthy();
  });

  it('should get the weather details method', () => {
    let mockData = {
      "coord": {
        "lon": 78.4744,
        "lat": 17.3753
      },
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 30.23,
        "feels_like": 35.6,
        "temp_min": 30.23,
        "temp_max": 31.73,
        "pressure": 1005,
        "humidity": 70
      },
      "visibility": 6000,
      "wind": {
        "speed": 4.63,
        "deg": 80
      },
      "rain": {
        "1h": 4.04
      },
      "clouds": {
        "all": 75
      },
      "dt": 1652351466,
      "sys": {
        "type": 1,
        "id": 9214,
        "country": "IN",
        "sunrise": 1652314524,
        "sunset": 1652360978
      },
      "timezone": 19800,
      "id": 1269843,
      "name": "Hyderabad",
      "cod": 200
    }
    let spy = spyOn(weatherSvc, 'getWeatherForCity').and.returnValue(Observable.of(mockData));
    component.globalSerachServiceBind();
  })
});
