import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form!: FormGroup;
  errorMessage ='';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });

    // this.authService.signup("mohammad@test2.com","123456789")
    // .subscribe(d => {
    //   console.log(d);
    // }, error => {
    //   console.log(error);
    // })
  }

  onsubmit() {
    this.authService.login(this.form.value.email, this.form.value.password)
      .subscribe( d => {        
        this.router.navigate(['/home']);
        this.form.reset();
      },
      error => {        
        this.errorMessage = error;
      })
  }
}
