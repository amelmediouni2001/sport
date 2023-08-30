import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  weatherData: any;
  icon: string;
  
  constructor(private fb:FormBuilder, private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm= this.fb.group ({
      city:["", [Validators.required]],
    })
  }
  kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}


  searchWeather(){
    alert("search weather is clicked");
    console.log("here weather object", this.weatherForm.value);
    this.weatherService.searchWeather(this.weatherForm.value).subscribe(
      (data)=>{
        console.log("here response from BE", data);
        this.weatherData = data.result;
        this.weatherData.temp = this.kelvinToCelsius(this.weatherData.temp);

        this.icon = `http://openweathermap.org/img/w/${data.result.icon[0].icon}.png`;



      }
    )

  }



}
