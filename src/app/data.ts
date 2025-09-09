import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private userData = ['Vansh','Abhinav','Jai','Arham'];
  getUsers(){
    console.log('userData')
    return this.userData;
  }
}
