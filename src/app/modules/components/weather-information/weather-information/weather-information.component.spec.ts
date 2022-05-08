import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInformationComponent } from './weather-information.component';
import { WeatherService } from '../services/weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WeatherInformationComponent', () => {
  let component: WeatherInformationComponent;
  let fixture: ComponentFixture<WeatherInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInformationComponent ],
      providers: [WeatherService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
