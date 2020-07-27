import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ToastService } from '../_services/toast.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private toastService: ToastService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.toastService.error('Unauthorized Access');
    this.router.navigate(['/home']);

    return false;
  }
}
