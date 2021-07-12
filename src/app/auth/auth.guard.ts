import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map, tap, take } from 'rxjs/operators';
  
  import { AuthService } from './auth.service';
  
  @Injectable({ providedIn: 'root' })
  export class AuthGuard implements CanActivate {

    loggedIn: any;
    constructor(private authService: AuthService,
                private router: Router) {
        
        
    }


                
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  
                     this.authService.isLogged
                      .subscribe(
                          d => {
                            this.loggedIn = d;
                            console.log("log=",this.loggedIn)
                          }
                      )
                  if (!this.loggedIn) {
                    this.router.navigate(['/login']);
                    return false;
                  }
                  return true;

                }

  }
  