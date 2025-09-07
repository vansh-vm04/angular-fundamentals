import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css'
})
export class DynamicCssClass {
  divClass = '';
}
