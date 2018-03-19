import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
// import { ClientDetailComponent } from '../client-detail/client-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  clients: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, ) { }

  // ngOnInit() {
  // }
  displayedColumns = ['phoneNumber', 'uin', 'name', 'isVerified', 'email', 'sex', 'birthDate', 'actions'];
  dataSource = new MatTableDataSource<Element>(this.clients);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.http.get('http://localhost:8080/clients').subscribe(data => {
      console.log(data);
      this.clients = data;
      this.dataSource = new MatTableDataSource<Element>(this.clients);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  deleteClient(id) {
    this.http.delete('http://localhost:8080/clients/' + id)
      .subscribe(res => {
        // this.router.navigate(['/clients']);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      }
      );
  }
}

export interface Element {
  phoneNumber: string;
  uin: number;
  name: string;
  isVerified: boolean;
  email: string;
  sex: string;
  birthDate: string;
}
const ELEMENT_DATA: Element[] = this.clients;
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
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Велимир Фомин",
  //   "isVerified": "true",
  //   "email": "hilanennam-9669@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Владлен Тимофеев",
  //   "isVerified": "true",
  //   "email": "yrepucerre-1834@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Трофим Зюганов",
  //   "isVerified": "true",
  //   "email": "xyqicera-8296@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Александр Гуляев",
  //   "isVerified": "true",
  //   "email": "acaffuce-0074@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Альфред Алексеев",
  //   "isVerified": "true",
  //   "email": "worrofynny-2280@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // },
  // {
  //   "phoneNumber": "+770544521452",
  //   "uin": "820145211452145",
  //   "name": "Динар Селиверстов",
  //   "isVerified": "true",
  //   "email": "koganicame-4391@yopmail.com",
  //   "sex": "Мужской",
  //   "birthDate": "2012-04-23T18:25:43.511Z"
  // }

// ];
