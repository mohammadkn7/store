import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  passwordValidator(control:any) {
    // {10,100}           - Assert password is between 10 and 100 characters
    // (?=.*[A-Z])       - password must contain at least 1 uppercase  character 
    if (control.value.match(/^(?=.*[A-Z]){10,100}$/)) {
      return null;
    } else {
      return { 'password is not valid format': true };
    }
  }

}
