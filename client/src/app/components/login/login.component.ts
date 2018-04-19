import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  role: String;
  hide = true;

  constructor(
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

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.openSnackBar('Вы успешно авторизовались в системе', 'OK');
        this.router.navigate(['dashboard']);
      } else {
        this.openSnackBar(data.msg, 'OK');
        this.router.navigate(['login']);
      }
    });
  }

}
