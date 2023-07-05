import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-logout',
  template: '',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthserviceService, private router: Router) {}

  ngOnInit() {
    this.authService.clearToken();
    this.authService.clearUserRole();
    this.router.navigateByUrl('/login');
  }

}
