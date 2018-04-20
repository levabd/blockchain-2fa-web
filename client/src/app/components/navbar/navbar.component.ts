import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToogle = new EventEmitter<void>();
  constructor(
    public authService: AuthService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 7000,
    });
  }

  onLogoutClick() {
    this.authService.logout();
    this.openSnackBar('Вы вышли из кабинета. Авторизуйтесь повторно при необходимости');
    this.router.navigate(['/login']);
    return false;
  }

  onToggleSidenav() {
    this.sidenavToogle.emit();
  }
}
