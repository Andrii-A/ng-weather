import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../common/constants';


export type fullForecast = {
  city: {
    name: string,
    country: string,
  },
  list: dailyForecast[]
};

export type dailyForecast = {
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  weather: [{ id: number, description: string }],
  wind: { speed: number, deg: number },
  dt_txt: string,
  selected?: boolean
};


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  fullForecast: fullForecast;
  fiveDaysList: dailyForecast[];
  selectedDay: dailyForecast;

  searchLocation: string;
  currentScale: string;
  showError: boolean;

  constructor(private http: HttpClient) {
    // defaults
    this.currentScale = 'metric';
    this.searchLocation = 'Burlington, CA';
  }

  ngOnInit() {
    this.getForecast();
  }


  getForecast() {
    const url = `${BASE_URL}&q=${this.searchLocation}`;

    this.http.get(url).subscribe(
      (res: any) => {
        this.showError = false;
        this.fullForecast = res;
        this.fiveDaysList = this.makeFiveDaysList(res.list);
        this.selectedDay = this.fiveDaysList[ 0 ];
        this.fiveDaysList[ 0 ].selected = true;
      },
      (error: any) => {
        this.showError = true;
        console.log('Cannot get Weather Data from the provider >>>', error);
      }
    );
  }


  makeFiveDaysList(longList: dailyForecast[]): dailyForecast[] {
    // since the BE returning the forecast for 5 days with 3 hours interval, we are getting 40 items (8 items per day)
    // I decided to pick first one to render a "Day Forecast" and get 5 items totally

    const shortList: dailyForecast[] = [];
    longList.forEach((item: any, idx: number) => {
        if (idx % 8 === 0) {
          shortList.push(item);
        }
      }
    );

    return shortList;
  }

  setCurrent(idx: number) {
    this.selectedDay = this.fiveDaysList[ idx ];

    this.fiveDaysList.forEach(d => d.selected = false);
    this.fiveDaysList[ idx ].selected = true;
  }

  toggleScale() {
    if (this.currentScale === 'imperial') {
      this.currentScale = 'metric';
    } else {
      this.currentScale = 'imperial';
    }
  }

}
