import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInformationComponent } from './modules/components/weather-information/weather-information/weather-information.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MomentModule } from 'ngx-moment';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    WeatherInformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MomentModule.forRoot(),
    ToastrModule.forRoot({
      "timeOut": 2000,
      "positionClass": "toast-top-right",
      "onActivateTick": true,
      "progressBar": true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
