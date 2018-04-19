import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ClientsTableComponent } from '../clients-table/clients-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  clientsTFA: any;
  clientsKaztel: any;
  role: any;
  stateUploadStatus: any;
  allLogs: any;
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute, ) { }

  // displayedColumns = ['PhoneNumber', 'Uin', 'Name', 'IsVerified', 'Email', 'Sex', 'BirthDate', 'Actions'];
  // dataSourceTFA = new MatTableDataSource<Element>(this.clientsTFA);
  // dataSourceKaztel = new MatTableDataSource<Element>(this.clientsKaztel);

  // @ViewChild(MatPaginator) paginatorTFA: MatPaginator;
  // @ViewChild(MatPaginator) paginatorKaztel: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // applyFilter(filterValue: string, service) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   if (service === 'tfa') {
  //     this.dataSourceTFA.filter = filterValue;
  //   }
  //   if (service === 'kaztel') {
  //     this.dataSourceKaztel.filter = filterValue;
  //   }
  // }

  ngOnInit() {
    // this.getClients('tfa');
    // this.getClients('kaztel');
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  ngAfterViewInit() {
    // this.dataSourceTFA.paginator = this.paginatorTFA;
    // this.dataSourceKaztel.paginator = this.paginatorTFA;
  }

  loadRole() {
    return localStorage.getItem('user.role');
  }

  uploadState(service) {
    this.http.get(`http://localhost:8080/api/clients/state/update?service=${service}`).subscribe(data => {
     this.stateUploadStatus = JSON.stringify(data);
    });
  }

  uploadLog() {
    this.http.get(`http://localhost:8080/api/clients/state/log`).subscribe(data => {
      this.allLogs = data['data'];
    });
  }

  // getClients(service) {
  //   this.http.get(`http://localhost:8080/api/clientsdb?service=${service}`).subscribe(data => {
  //     switch (service) {
  //       case 'tfa':
  //         this.clientsTFA = data['data']['docs'];
  //         this.dataSourceTFA = new MatTableDataSource<Element>(this.clientsTFA);
  //         this.dataSourceTFA.paginator = this.paginatorTFA;
  //         break;
  //       case 'kaztel':
  //         this.clientsKaztel = data['data']['docs'];
  //         this.dataSourceKaztel = new MatTableDataSource<Element>(this.clientsKaztel);
  //         this.dataSourceKaztel.paginator = this.paginatorTFA;
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }


  // deleteClient(id) {
  //   this.http.delete('http://localhost:8080/clients/' + id)
  //     .subscribe(res => {
  //       // this.router.navigate(['/clients']);
  //       this.ngOnInit();
  //     }, (err) => {
  //       console.log(err);
  //     }
  //     );
  // }
}

export interface Element {
  phoneNumber: string;
  uin: number;
  name: string;
  isVerified: boolean;
  email: string;
  sex: string;
  birthDate: string;
  address: string;
}
// const ELEMENT_DATA: Element[] = this.clients;
// const ELEMENT_DATA: Element[] = [
//   {
//     phoneNumber: '+770544521452',
//     uin: 820145211452145,
//     name: 'Велимир Фомин',
//     isVerified: true,
//     email: 'hilanennam-9669@yopmail.com',
//     sex: 'Мужской',
//     birthDate: '2012-04-23T18:25:43.511Z',
//     // actions: {
//     //   view: () => {
//     //     this.clientDetail.getClientDetail(this.route.snapshot.params['id']);
//     //   },
//     // }
  // }
// ];
