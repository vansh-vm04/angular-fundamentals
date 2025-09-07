import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName = "Angular 20";
  duration = "2 hrs";
  isSubscribed = true;
  className = 'bg-success';
  showAlert = ()=>{
    alert('Hello')
  }
  changeCourse = (name:string)=>{
    this.courseName = name;
  }
  cityName = 'Jaipur'
}
