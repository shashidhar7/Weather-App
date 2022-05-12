import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';

import { WeatherInformationComponent } from './weather-information.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// services
import { ToastrModule } from 'ngx-toastr';
import { WeatherService } from '../services/weather.service';

describe('WeatherInformationComponent', () => {
  let component: WeatherInformationComponent;
  let fixture: ComponentFixture<WeatherInformationComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [WeatherInformationComponent],
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [WeatherService]
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

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
  // it(`should create service`, async(inject([HttpTestingController, WeatherService],
  //   (httpClient: HttpTestingController, apiService: WeatherService) => {
  //     expect(apiService).toBeTruthy();
  // })));
});
