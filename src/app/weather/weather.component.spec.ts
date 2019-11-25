import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { TestHelperModule } from '../common/test.helpers.module';
import { mockRes } from '../common/mockResponse';

import { BASE_URL } from '../common/constants';
import { WeatherComponent } from './weather.component';


const SpyHttpClient = jasmine.createSpyObj('HttpClient', ['get']);


describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TestHelperModule],
      declarations: [WeatherComponent],
      providers: [
        { provide: HttpClient, useValue: SpyHttpClient }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    SpyHttpClient.get.and.returnValue(of(mockRes));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    SpyHttpClient.get.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call BE to get weather on init with default location', () => {
    expect(SpyHttpClient.get).toHaveBeenCalledWith(`${BASE_URL}&q=Burlington, CA`);
  });

  it('should call BE to get weather with user typed location', () => {
    component.searchLocation = 'Tokyo, JP';
    component.getForecast();
    expect(SpyHttpClient.get).toHaveBeenCalledWith(`${BASE_URL}&q=Tokyo, JP`);
  });

  it('should [setCurrent] selected day', () => {
    // default selection is first item
    expect(component.selectedDay).toEqual(component.fiveDaysList[0]);

    // when user clicks on a 4th tab
    component.setCurrent(3);
    expect(component.selectedDay).toEqual(component.fiveDaysList[3]);
  });


  it('should [makeFiveDaysList]', () => {
    // since the BE returning the forecast for 5 days with 3 hours interval, we are getting 40 items (8 items per day)
    // I decided to pick first one to render a "Day Forecast" and get 5 items totally

    const fullList = mockRes.list;
    expect(component.makeFiveDaysList(fullList as any).length).toEqual(5);
  });


  it('should [toggleScale]', () => {
    component.currentScale = 'metric';
    component.toggleScale();
    expect(component.currentScale).toEqual('imperial');

    component.toggleScale();
    expect(component.currentScale).toEqual('metric');
  });


});



