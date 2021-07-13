import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLogged !: boolean;
  ngOnInit(): void {
    this.authService.isLogged
      .subscribe( d => {
        this.isLogged = d;
      })
  }

  onLogin() {
    // this.authService.login();
  }
  onLogout() {
    this.authService.logOut();
  }

}
