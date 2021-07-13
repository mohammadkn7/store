import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.signup("mohammad@test2.com","123456789")
    .subscribe(d => {
      console.log(d);
    }, error => {
      console.log(error);
    })
  }

}
