import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from './validators.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private validatorService: ValidatorsService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({      
      'name': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),  // name 10-100
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]), // lastName 10-100
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(150)] ), // email max = 150   
      'birthday': new FormControl(null, [Validators.required] ), 
      'address': new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(200)]),  // name 20-200
      'zipCode': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),  // zip-code 10 
      'password': new FormControl(null, [Validators.required, Validators.minLength(10), this.validatorService.passwordValidator]),  // password min 10 char and must contain at least 1 uppercase  character 
      'rePaswprd': new FormControl(null, [Validators.required, Validators.minLength(10)]) 
    });



    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signUpForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signUpForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signUpForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }
}
