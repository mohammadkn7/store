import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user =new BehaviorSubject<any>(false) ;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {        
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAtDtoIdOEi_JMb56T4zYr1CeHpN9jFolA',
          {
            email: email,
            password: password,
            returnSecureToken: true
          }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.email,
              resData.localId,
              resData.idToken,
              +resData.expiresIn
            );
          })
        );    
  }

  logOut() {
     this.user.next(false);
     this.router.navigate(['/login']);
     localStorage.removeItem('userData');
  }


  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAtDtoIdOEi_JMb56T4zYr1CeHpN9jFolA',
        {
          email: email,
          password: password,
          address: 'testAddress',
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData):any => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  postUser(user : {name: string, lastName: string, email: string, birthDAY: Date, address: string, zipCode: string, password: string}) {
   return    this.http.post(
     'https://buglus-test-store-default-rtdb.firebaseio.com/posts.json',
     user
   )
  }
  getUser() {
    return this.http.get<{ [key: string]: any }>(
      'https://buglus-test-store-default-rtdb.firebaseio.com/posts.json'      
    ).pipe(
      map((responseData): any[] => {
        
        const postsArray: any[] = [];
        for (const key in responseData) {          
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {        
        return throwError(errorRes);
      })
    );
  }
}
