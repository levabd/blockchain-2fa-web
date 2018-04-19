import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  role: String;
  hide = true;
  emailError = false;
  roles = [
    { value: 'admin', viewValue: 'Администратор Казтел' },
    { value: 'superadmin', viewValue: 'Администратор TFA' }
  ];
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      role: this.role
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      // this.flashMessage.show('Пожалуйста заполните все поля', { cssClass: 'alert-danger', timeout: 3000 });
      this.openSnackBar('Пожалуйста заполните все поля', 'OK');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      // this.flashMessage.show('Введите корректный Email', { cssClass: 'alert-danger', timeout: 3000 });
      this.emailError = true;
      this.openSnackBar('Введите корректный Email', 'OK');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.openSnackBar('Вы успешно зарегистрированы и можете войти', 'OK');
        // this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        // this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.openSnackBar('Ошибка при регистрации, повторите', 'OK');
        this.router.navigate(['/register']);
      }
    });
  }
}
