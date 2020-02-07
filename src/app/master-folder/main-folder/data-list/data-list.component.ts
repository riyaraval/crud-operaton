import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  constructor(private _studentService: StudentService, private SpinnerService: NgxSpinnerService) { }

  student = [];
  ngOnInit() {
    this._studentService.getStudents().subscribe(data => {
      this.student = data;
    });
    this.SpinnerService.hide();
  }

  deleteData(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.SpinnerService.show();
      this._studentService.deleteStudent(id).subscribe();
      this._studentService.getStudents().subscribe(data => {
        this.student = data;
      });
      this.SpinnerService.hide();
    }
  }
}
