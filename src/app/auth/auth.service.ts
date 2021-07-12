import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  public isLogged =new BehaviorSubject<any>(true) ;



  constructor() { }

  public login() {    
    return this.isLogged.next(true);
  }

  logOut() {
    return this.isLogged.next(false);
  }

}
