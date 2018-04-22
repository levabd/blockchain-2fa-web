import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  isDev: boolean;
  authToken: any;
  user: any;
  role: any;

  constructor(private http: Http) {
    this.isDev = true;  // Change to false before deployment
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.apiUrl}users/register`, user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${environment.apiUrl}users/authenticate`, user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.apiUrl}users/profile`, { headers: headers })
      .map(res => res.json());
  }

  getClient(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(`${environment.apiUrl}api/clients/${id}`, { headers: headers })
      .map(res => res.json());
  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  isAdmin(user) {
    if (user.role === 'superadmin') {
      return 'superadmin';
    }
    if (user.role === 'admin') {
      return 'admin';
    } else {
      return user.role + ' role access denied';
    }
  }

  loadUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
