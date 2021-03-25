import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, ControlValueAccessor, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string;
  password:string;

  user_email:string = "Samyuktaa.Balaji@cat.com";
  user_pass:string = "123456789";

  constructor(private router: Router) { 
    this.email = "";
    this.password = "";
  }

  checkUser(){
    const usr_email = this.email;
    const usr_password = this.password;
    if((this.user_email==usr_email) && (this.user_pass==usr_password)){
      this.router.navigate(['/dashboard']);
    }
    return false;
  }

}
