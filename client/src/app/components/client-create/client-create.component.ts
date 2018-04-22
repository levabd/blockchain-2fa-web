import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ValidateService } from '../../services/validate.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ClientCreateComponent implements OnInit {

  client = {};
  existingClient = false;
  errorData = {};
  sexs = [
    { value: 'male', viewValue: 'Мужской' },
    { value: 'female', viewValue: 'Женский' }
  ];
  regionsRu = [
    { value: 'Астана' },
    { value: 'Алматы' },
    { value: 'Акмолинская область' },
    { value: 'Актюбинская область' },
    { value: 'Алматинская область' },
    { value: 'Атырауская область' },
    { value: 'Восточно-Казахстанская область,' },
    { value: 'Жамбылская область' },
    { value: 'Западно Казахстанская область' },
    { value: 'Карагандинская область' },
    { value: 'Костанайская область' },
    { value: 'Кзылординская область' },
    { value: 'Мангистауская область' },
    { value: 'Павлодарская область' },
    { value: 'Северо-Казахстанская область' },
    { value: 'Южно-Казахстанская область' },
  ];
  role: any;
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2000, 0, 1);
  checkForm = true;
  datePipe: DatePipe = new DatePipe('en-US');
  service: any;
  Loading: any = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private adapter: DateAdapter<any>,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adapter.setLocale('ru');
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 7000, });
  }

  checkClients() {
    this.client['CheckPhoneNumber'] = `77${this.client['CheckPhoneNumber']}`;
    this.Loading = true;
    this.checkInAllServices(this.client['CheckPhoneNumber']).subscribe(
      data => {
        const DataTFA = data[0];
        const DataKaztel = data[1];
        if (this.role === 'superadmin') {
          if (!DataTFA['error']) {
            this.client = DataTFA;
            this.openSnackBar('Пользователь с таким номером телефона уже существует в сети TFA');
            this.router.navigate(['/client-details', this.client['address']]);
            this.existingClient = true;
          }
          if (DataTFA['error']) {
            this.openSnackBar('Номер проверен - вы можете добавить пользователя в сеть TFA');
            this.client['PhoneNumber'] = this.client['CheckPhoneNumber'];
            this.checkForm = false;
          }
        }
        if (this.role === 'admin') {
          if (!DataKaztel['error']) {
            this.client = DataKaztel;
            this.openSnackBar('Пользователь с таким номером телефона уже существует в сети Kaztel');
            this.router.navigate(['/client-details', this.client['address']]);
            this.checkForm = false;
            this.existingClient = true;
          }
          if (DataKaztel['error']) {
            if (!DataTFA['error']) {
              this.client = DataTFA;
              this.client['AdditionalData'] = {};
              this.openSnackBar('Пользователь с таким номером телефона существует в сети TFA. Загружаем ...');
              this.checkForm = false;
              this.existingClient = true;
            }
            if (DataTFA['error']) {
              this.client['AdditionalData'] = {};
              this.openSnackBar('Номер проверен - вы можете добавить пользователя в сеть Kaztel');
              this.client['PhoneNumber'] = this.client['CheckPhoneNumber'];
              this.checkForm = false;
              this.existingClient = false;
            }
          }
        }
      }
    );
  }

  checkInAllServices(phoneNumber) {
    return Observable.forkJoin(
      this.http.get(`${environment.apiUrl}api/clients/check/tfa/${phoneNumber}`),
      this.http.get(`${environment.apiUrl}api/clients/check/kaztel/${phoneNumber}`)
    );
  }

  saveClient() {
    // Required Fields
    if (!this.validateService.validateClient(this.client)) {
      this.openSnackBar('Пожалуйста заполните все поля');
      return false;
    }
    // Validate Email
    if (!this.validateService.validateEmail(this.client['Email'])) {
      this.openSnackBar('Введите корректный Email');
      return false;
    }
    if (this.role === 'superadmin') {
      this.postClient('tfa');
    }
    if (this.role === 'admin') {
      if (this.existingClient) {
        this.postClient('kaztel');
      }
      if (!this.existingClient) {
        this.postClient('tfa', false);
        this.postClient('kaztel');
      }
    }
  }

  postClient(service, route = true) {
    this.client['service'] = service;
    this.client['IsVerified'] = false;
    this.http.post(`${environment.apiUrl}api/clients/`, this.client)
      .subscribe(res => {
        if (res['success']) {
          this.openSnackBar(res['message'] + ' в сети ');
          if (route) { this.router.navigate(['/client-details', res['address']]); }
        }
        if (!res['success']) { this.openSnackBar(res['message'] + ' ' + res['error']); this.router.navigate(['/dashboard']); }
      }, (err) => {
        console.log(err);
      });
  }
}
