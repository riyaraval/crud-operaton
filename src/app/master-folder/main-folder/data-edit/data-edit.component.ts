import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../models/IEmployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.scss']
})
export class DataEditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private _employeeSevice:EmployeeService,private route:Router) { }
  id:number;
  data={};
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>this.id=parseInt(params
      .get('id')));
      console.log(this.id);
    this._employeeSevice.getEmployee(this.id).subscribe((d:{})=>{
      this.data=d;
      console.log(this.data);
    })
  }
  
  updateData(){
    this._employeeSevice.updateData(this.data).subscribe(d=>{
      console.log(d);
      this.route.navigateByUrl('/data-list');
    })
  }
}
