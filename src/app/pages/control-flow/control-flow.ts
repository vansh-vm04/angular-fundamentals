
import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  imports: [NgFor],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isVisible = signal<boolean>(false);

  hideInput(){
    this.isVisible.set(false);
  }
  showInput(){
    this.isVisible.set(true);
  }

  cityNames = ['Jaipur','Agra','Delhi']
}
