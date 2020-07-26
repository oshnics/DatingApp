import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  success = (message: string) => {
    this.toastr.success(message, 'Notification');
  }

  error = (message: string) => {
    this.toastr.error(message, 'Notification');
  }

  warning = (message: string) => {
    this.toastr.warning(message, 'Notification');
  }

  info = (message: string) => {
    this.toastr.info(message, 'Notification');
  }
}
