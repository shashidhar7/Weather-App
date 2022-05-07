import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherInformationComponent } from '../app/modules/components/weather-information/weather-information/weather-information.component'
const routes: Routes = [{
  path: "",
  component: WeatherInformationComponent
},
{
  path: ":locationName",
  component: WeatherInformationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
