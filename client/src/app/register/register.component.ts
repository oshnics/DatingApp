import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../_services/auth.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  register = () => {
    this.authService.register(this.model).subscribe(() => {
      this.toastService.success('Registration successful');
    }, error => {
      this.toastService.error(error);
    });
  }

  cancel = () => {
    this.cancelRegister.emit(false);
  }
}
