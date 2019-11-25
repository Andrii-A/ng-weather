import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { TempPipe } from './common/pipes/temp.pipe';
import { SpeedPipe } from './common/pipes/speed.pipe';
import { PressurePipe } from './common/pipes/pressure.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    TempPipe,
    SpeedPipe,
    PressurePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
