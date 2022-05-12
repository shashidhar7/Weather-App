import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { environment } from '../../../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  })

  // get weather details
  it('should check weather details method', () => {
    const mockData = {
      city: 'Hyderabad',
    }
    service.getWeatherForCity('Hyderabad')
      .subscribe((response: any) => {
        console.log("response==", response);
        expect(response).toEqual(mockData);
        const req = httpMock.expectOne(`${environment.weath_info}'Hyderabad'&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`);
        expect(req.request.method).toEqual('GET');
        req.flush(mockData)
      })
  });
});
