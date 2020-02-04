import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) { }
  
  employee=[];

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data=>this.employee=data);
  }

  deleteData(id){
    if (window.confirm('Are you sure, you want to delete?')){
      this._employeeService.delete(id).subscribe(data => {
        this._employeeService.getEmployees().subscribe(d=>this.employee=d);
      })
    }
  }
}
