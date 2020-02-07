import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninSignupService } from 'src/app/master-folder/services/signinSignup.service';
import { Iuserdata } from 'src/app/master-folder/models/IUserdata';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private fb:FormBuilder, private route:Router,private _signinSignupService: SigninSignupService){}
  public userdata:Iuserdata[]; 
  err_msg:string;
  temp = false;
  token='aaaa';
  ngOnInit(){
    this.userdata=this._signinSignupService.userData;
  }
  
  get Name(){
    return this.registrationForm.get('name');
  }
  get Email(){
    return this.registrationForm.get('email');
  }
  get Password(){
    return this.registrationForm.get('password');
  }

  registrationForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]]
  });
  addUserData(){
    if(this.temp){
    this._signinSignupService.userData.push({
      Name:this.Name.value,
      Password:this.Password.value,
      Email:this.registrationForm.get('email').value
    });     
    console.log(this._signinSignupService.userData);
    this.route.navigateByUrl('/home');

    window.localStorage.setItem('token',this.token);
    }
    else{
      this.err_msg="mismatch";
    }
  }
  onKey(event){
    if(event.target.value==this.Password.value){
      this.err_msg="";
      this.temp = true;
      return this.temp;
    }
    else{
      this.err_msg="mismatch";
      this.temp = false;
      return this.temp;
    }
  }

}
