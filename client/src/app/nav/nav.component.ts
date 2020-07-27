import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login = () => {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.toastService.success('Logged in successfully');
      },
      (error) => {
        this.toastService.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  loggedIn = () => {
    return this.authService.loggedIn();
  }

  logout = () => {
    localStorage.removeItem('token');
    this.toastService.info('Logged out successfully');
    this.router.navigate(['/home']);
  }
}
