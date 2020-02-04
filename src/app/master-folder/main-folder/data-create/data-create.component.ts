import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/IEmployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {

  constructor(private _employeeService:EmployeeService, private route:Router) { }
  data={};

  ngOnInit() {
  }
  addData(){
    this._employeeService.create(this.data).subscribe((d:{})=>{
      console.log(this.data);
      this.route.navigateByUrl('/data-list');
    })
  }

}
