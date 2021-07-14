import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  navbarList = ["profile", "edit", "shopping cart", "sign up"]
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser() ;
  }

  getUser() {
      this.authService.getUser()
      .subscribe(
        d => {
          console.log(d);
        }
      )
  }

}
