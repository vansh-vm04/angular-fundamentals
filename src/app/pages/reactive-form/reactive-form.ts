import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IDept } from '../../model/User.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit {
  UserForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dept: new FormControl(''),
    desg: new FormControl(''),
  });

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDept();
  }

  departments: IDept[] = [];
  designations: any = [];

  showValue: any = null;

  onSubmit() {
    this.showValue = JSON.stringify(this.UserForm.value);
  }
  getDept() {
    this.http
      .get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
      .subscribe((result: any) => {
        this.departments = result;
      });
  }

  getDesignationById() {
    this.http
      .get<Object>(
        `https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=${
          this.UserForm.get('dept')?.value
        }`
      )
      .subscribe((result: any) => {
        this.designations = result;
      });
  }
}
