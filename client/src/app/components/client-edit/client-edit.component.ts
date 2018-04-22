import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ClientEditComponent implements OnInit {

  client: any;
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

  constructor(private http: HttpClient,
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private adapter: DateAdapter<any>,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.adapter.setLocale('ru');
    this.getClient(this.route.snapshot.params['id']);
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 7000, });
  }

  getClient(id) {
    this.http.get(`${environment.apiUrl}api/clients/${id}`).subscribe(data => {
      if (this.role === 'superadmin') {
        this.client = data;
        this.client['Birthdate'] = this.getDate(data['Birthdate']);
      }
      if (this.role === 'admin') {
        this.client = data;
        this.client['Birthdate'] = this.getDate(data['Birthdate']);
        if (!this.client['AdditionalData']) { this.client['AdditionalData'] = {}; }
      }
    });
  }

  getDate = (data) => {
    const moment = new Date(data);
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const year = moment.getFullYear();
    const month = months[moment.getMonth()];
    const date = moment.getDate() < 10 ? '0' + moment.getDate() : moment.getDate();
    const time = date + '.' + month + '.' + year;
    return time;
  }


  updateClient() {
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
    this.setService();
    this.http.post(`${environment.apiUrl}api/clients/update/`, this.client)
      .subscribe(res => {
        if (res['success']) { this.openSnackBar(res['message']); this.router.navigate(['/client-details', res['address']]); }
        if (!res['success']) { this.openSnackBar(res['message'] + ' ' + res['error']); this.router.navigate(['/dashboard']); }
      }, (err) => {
        console.log(err);
      });
  }

  setService() {
    if (this.role === 'superadmin') { this.client['service'] = 'tfa'; }
    if (this.role === 'admin') { this.client['service'] = 'kaztel'; }
  }

}
