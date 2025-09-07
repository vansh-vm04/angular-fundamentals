import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { IDept, IUser } from '../../model/User.model';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form implements OnInit{
  http = inject(HttpClient);
  result:any = [];
  user:IUser = new IUser();
  departments:IDept[] = [];
  selectedDpartmentId:number | null = null;
  designation:any = [];

  ngOnInit(): void {
    this.getDept();
  }

  createUser() {
    this.http.post<Object>('https://api.freeprojectapi.com/api/UserApp/CreateNewUser', {
      userId: 0,
      emailId: this.user.email,
      fullName: this.user.username,
      password: this.user.password,
    }).subscribe(res=>{
      this.result = res;
    });
  }

  getDept(){
    this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments').subscribe(
      (result:any)=>{
        this.departments = result;
      }
    )
  }

  getDesignationById(){
    this.http.get<Object>(`https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=${this.selectedDpartmentId}`).subscribe((result:any)=>{
      this.designation = result;
    })
  }
}
