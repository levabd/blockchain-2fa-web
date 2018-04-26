import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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
    { value: 'superadmin', viewValue: 'Администратор TFA' },
    { value: 'admin', viewValue: 'Администратор Казахтелеком' }
  ];
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
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
      this.openSnackBar('Пожалуйста заполните все поля', 'OK');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.emailError = true;
      this.openSnackBar('Введите корректный Email', 'OK');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.openSnackBar('Администратор успешно зарегистрирован в сети', 'OK');
        this.router.navigate(['/dashboard']);
      } else {
        this.openSnackBar('Ошибка при регистрации, повторите', 'OK');
        this.router.navigate(['/register']);
      }
    });
  }
}
