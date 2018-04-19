import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit, AfterViewInit {

  role: any;
  client = {};
  clientLog: any;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute, ) { }

  displayedColumns = ['Event', 'Status', 'Code', 'ExpiredAt', 'Embeded', 'ActionTime', 'Method', 'Cert'];
  dataSource = new MatTableDataSource<Element>(this.clientLog);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches{
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.role = this.authService.isAdmin(this.authService.loadUser());
    this.getClientDetail(this.route.snapshot.params['id']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getClientDetail(id) {
    this.http.get('http://localhost:8080/api/clients/' + id).subscribe(data => {
      this.client = data;
      this.clientLog = data['Logs'];
      this.dataSource = new MatTableDataSource<Element>(this.clientLog);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteClient(id) {
    this.http.delete('http://localhost:8080/clients/' + id)
      .subscribe(res => {
        this.router.navigate(['/clients']);
      }, (err) => {
        console.log(err);
      }
      );
  }

}

// export interface Element {
//   phoneNumber: string;
//   uin: number;
//   name: string;
//   isVerified: boolean;
//   email: string;
//   sex: string;
//   birthDate: string;
//   address: string;
// }

export interface Element {
  Event: string;
  Status: string;
  Code: number;
  ExpiredAt: number | Date;
  Embeded: boolean;
  ActionTime: number;
  Method: string;
  Cert: string;
}

// { Name: 'string',
// sawtooth-kaztel-sc-tfa-tp |   PhoneNumber: '77770214417',
// sawtooth-kaztel-sc-tfa-tp |   Uin: 11635451200,
// sawtooth-kaztel-sc-tfa-tp |   Birthdate: 124224534,
// sawtooth-kaztel-sc-tfa-tp |   Email: 'string@mail.ru',
// sawtooth-kaztel-sc-tfa-tp |   Sex: 'male',
// sawtooth-kaztel-sc-tfa-tp |   PushToken: 'string',
// sawtooth-kaztel-sc-tfa-tp |   Logs: 
// sawtooth-kaztel-sc-tfa-tp |    { '1': 
// sawtooth-kaztel-sc-tfa-tp |       { ActionTime: 1521619058.07,
// sawtooth-kaztel-sc-tfa-tp |         ExpiredAt: 1521619478.07,
// sawtooth-kaztel-sc-tfa-tp |         Event: 'login',
// sawtooth-kaztel-sc-tfa-tp |         Method: 'sms',
// sawtooth-kaztel-sc-tfa-tp |         Status: 'SEND_CODE',
// sawtooth-kaztel-sc-tfa-tp |         Embeded: undefined,
// sawtooth-kaztel-sc-tfa-tp |         Cert: undefined,
// sawtooth-kaztel-sc-tfa-tp |         Code: 235122 },
// sawtooth-kaztel-sc-tfa-tp |      '2': 
// sawtooth-kaztel-sc-tfa-tp |       { ActionTime: 1521619107.082,
// sawtooth-kaztel-sc-tfa-tp |         ExpiredAt: 1521619527.082,
// sawtooth-kaztel-sc-tfa-tp |         Event: 'login',
// sawtooth-kaztel-sc-tfa-tp |         Embeded: undefined,
// sawtooth-kaztel-sc-tfa-tp |         Status: 'VALID',
// sawtooth-kaztel-sc-tfa-tp |         Code: 235122,
// sawtooth-kaztel-sc-tfa-tp |         Cert: undefined },
// sawtooth-kaztel-sc-tfa-tp |      '3': 
// sawtooth-kaztel-sc-tfa-tp |       { ActionTime: 1521619212.461,
// sawtooth-kaztel-sc-tfa-tp |         ExpiredAt: 1521619632.461,
// sawtooth-kaztel-sc-tfa-tp |         Event: 'login',
// sawtooth-kaztel-sc-tfa-tp |         Method: 'push',
// sawtooth-kaztel-sc-tfa-tp |         Status: 'SEND_CODE',
// sawtooth-kaztel-sc-tfa-tp |         Embeded: undefined,
// sawtooth-kaztel-sc-tfa-tp |         Cert: undefined,
// sawtooth-kaztel-sc-tfa-tp |         Code: 201844 } } }
