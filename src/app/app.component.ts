import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit(){
    this.SpinnerService.show();
  }

  constructor( private SpinnerService: NgxSpinnerService){}

  kickOutUser(){
    this.SpinnerService.show();
    window.localStorage.removeItem("token");
  }

}
