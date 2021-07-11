import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  passwordValidator(control:any) {    
    //      - password must contain at least 1 uppercase  character 
    
    if(control.value) {
      if (control.value.match(/([A-Z])/)) {
        return null;
      } else {
        return { 'passwordUpperase': true };
      }
    }
    return null
  }

}
