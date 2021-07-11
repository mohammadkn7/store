import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  passwordValidator(control:any) {    
    // - password must contain at least 1 uppercase  character 
    
    if(control.value) {
      if (control.value.match(/([A-Z])/)) {
        return null;
      } else {
        return { 'passwordUpperase': true };
      }
    }
    return null
  }

  zipCodeValidator(control:any) {
    // console.log(control);
    // console.log(control.get('password').value);
    if(control.value) {
      if (control.value.match(/^[0-9]*$/)) {
        return null;
      } else {
        return { 'onlyNumeric': true };
      }
    }
    return null
  }

  confiremValidator(control: any) {

    console.log("console confirm", control.parent);
    if(control.value) {

      if (control.value == control.parent.value.password) {
        return null;
      } else {
        return { 'passwordNotConfirm': true };
      }
    }
    return null
  }
}
