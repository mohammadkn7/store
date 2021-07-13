import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ValidatorsService } from './validators.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: true}
  }]
})
export class UserRegisterComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private validatorService: ValidatorsService,
              private authServie: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({     
      
      'userInfo': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),  // name 10-100
        'lastName': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]), // lastName 10-100
        'email': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(150)] ), // email max = 150   
        'birthday': new FormControl(null, [Validators.required] ), 
      }),
      'addressInfo': new FormGroup({
        'address': new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(200)]),  // name 20-200
        'zipCode': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), this.validatorService.zipCodeValidator]),  // zip-code 10 
      }),
      'password': new FormControl("null", [Validators.required, Validators.minLength(10),this.validatorService.passwordValidator]),  // password min 10 char and must contain at least 1 uppercase  character 
      'rePassword': new FormControl(null, [Validators.required, Validators.minLength(10),this.validatorService.confiremValidator]) 
      });
  }

  onsubmit() {
    if(this.signUpForm.status == "INVALID") return

    this.authServie.postUser({
        name:this.signUpForm.value.userInfo.name,
        lastName:this.signUpForm.value.userInfo.lastName,
        email: this.signUpForm.value.userInfo.email,
        birthDAY: this.signUpForm.value.userInfo.birthday,
        address: this.signUpForm.value.addressInfo.address,
        zipCode: this.signUpForm.value.addressInfo.address,
        password: this.signUpForm.value.password
      }).subscribe(
        d => {
          // console.log(d);
          this.signUpForm.reset();
          this.router.navigate(['/home']);
        },
        e => {
          console.log(e);
        }
      )
      
  }
}
