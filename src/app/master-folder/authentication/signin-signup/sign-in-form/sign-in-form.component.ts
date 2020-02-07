import { Component, OnInit } from '@angular/core';
import { Iuserdata } from 'src/app/master-folder/models/IUserdata';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninSignupService } from 'src/app/master-folder/services/signinSignup.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  constructor(private fb:FormBuilder,private route:Router, private SpinnerService: NgxSpinnerService, private _signinSignupService:SigninSignupService){}

  public registerdata: Iuserdata[];
  err_msg:string;
  token:string='aaaa';
  ngOnInit(){
    this.registerdata=this._signinSignupService.getData();
    this.SpinnerService.hide();
   }
  
    get Name(){
      return this.registrationForm.get('name');
    }
    get Password(){
      return this.registrationForm.get('password');
    }

    registrationForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required]]
    });

    SubmitData(){
      let selecteditem = this.registerdata.find(item => item.Password===this.Password.value && item.Name===this.Name.value);
      if(selecteditem){
        this.SpinnerService.show();
      this.route.navigateByUrl('/data/data-list');
      window.localStorage.setItem('token',this.token);
    }
    else{
      this.err_msg="Username or Password is incorrect.";
    }
  }
}
