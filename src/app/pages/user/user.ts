import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, NgStyle, UpperCasePipe } from '@angular/common';
import { Data } from '././../../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [UpperCasePipe, DatePipe, NgStyle],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  newClass = "red";
  userList:any[] = [];
  Date:any = null;
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);
  userService:any[] = [];

   observable = new Observable(observer=>{
    let count = 0;
    setInterval(()=>{
      observer.next(count++);
    },1000);
   })

  constructor(private dataService:Data){}

  subscription = this.observable.subscribe(val => console.log(val));

  ngOnInit(): void {
    this.userService = this.dataService.getUsers();
    this.Date = new Date();
    this.getUsers();
    setTimeout(() => {
      this.subscription.unsubscribe()
      console.log('unsubscribed')
    }, 5000);
  }
  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.cdr.detectChanges();
    })
  }
}