import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
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

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private adapter: DateAdapter<any>,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.adapter.setLocale('ru');
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 7000,
    });
  }


  checkClients() {
    this.client['CheckPhoneNumber'] = `77${this.client['CheckPhoneNumber']}`;
    this.checkInAllServices(this.client['CheckPhoneNumber']).subscribe(
      data => {
        // if TFA admin ->
        // if return data[0] has not error then client equal data[0] and route to link /client-details->
        // if return data[0] has error then open NewClient form
        if (this.role === 'superadmin') {
          if (!data[0]['error']) {
            this.client = data[0];
            this.openSnackBar('Пользователь с таким номером телефона уже существует в сети TFA');
            this.router.navigate(['/client-details', this.client['address']]);
            this.existingClient = true;
          }
          if (data[0]['error']) {
            this.openSnackBar('Номер проверен - вы можете добавить пользователя в сеть TFA');
            this.client['PhoneNumber'] = this.client['CheckPhoneNumber'];
            this.checkForm = false;
          }
        }
        if (this.role === 'admin') {
          if (!data[1]['error']) {
            this.client = data[0];
            this.openSnackBar('Пользователь с таким номером телефона уже существует в сети Kaztel');
            this.router.navigate(['/client-details', this.client['address']]);
            this.checkForm = false;
            this.existingClient = true;
          }
          if (data[1]['error']) {
            if (!data[0]['error']) {
              this.client = data[0];
              this.client['AdditionalData'] = {};
              this.openSnackBar('Пользователь с таким номером телефона существует в сети TFA. Загружаем ...');
              this.checkForm = false;
              this.existingClient = true;
            }
            if (data[0]['error']) {
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
      this.http.get('http://localhost:8080/api/clients/check/tfa/' + phoneNumber),
      this.http.get('http://localhost:8080/api/clients/check/kaztel/' + phoneNumber)
    );
  }

  setService() {
    if (this.role === 'superadmin') {
      this.client['service'] = 'tfa';
    }

    if (this.role === 'admin') {
      this.client['service'] = 'kaztel';
    }
  }

  saveClient() {
    this.setService();
    this.client['IsVerified'] = false;

    this.http.post('http://localhost:8080/api/clients/', this.client)
      .subscribe(res => {
        if (res['success']) { this.openSnackBar(res['message']); this.router.navigate(['/client-details', res['address']]); }
        if (!res['success']) { this.openSnackBar(res['message'] + ' ' + res['error']); this.router.navigate(['/dashboard']); }
      }, (err) => {
        console.log(err);
      }
      );
  }

  // this.client['CheckPhoneNumber']

  // checkIt(role) {
  //   if (role === 'superadmin') {
  //     this.checkClient('tfa', this.client['CheckPhoneNumber']);
  //     if (this.existingClient) {
  //       this.router.navigate(['/client-details', this.client['address']]);
  //     }
  //   }

  //   if (this.role === 'admin') {
  //     this.checkClient('kaztel', this.client['CheckPhoneNumber']);
  //     if (!this.existingClient) {
  //       this.checkClient('tfa', this.client['CheckPhoneNumber']);
  //     }
  //   }
  // }
  // checkClient(service, phoneNumber) {
  //   this.http.get('http://localhost:8080/clients/check/' + service + '/' + phoneNumber).subscribe(data => {
  //     if (!data['error']) {
  //       this.existingClient = true;
  //       this.client = data;
  //       if (this.role === 'superadmin') {
  //         this.router.navigate(['/client-details', this.client['address']]);
  //       }
  //       // this.client['Birthdate'] = this.datePipe.transform(this.client['Birthdate'], 'dd.MM.yyyy');
  //     } else {
  //       if (!this.existingClient) {
  //         this.checkForm = false;
  //       }
  //       this.errorData = JSON.stringify(data);
  //     }
  //   });
  // }

}
