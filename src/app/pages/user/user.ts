import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [UpperCasePipe,DatePipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  userList:any[] = [];
  Date:any = null;
  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.Date = new Date();
    this.getUsers();
  }
  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.cdr.detectChanges();
    })
  }
}