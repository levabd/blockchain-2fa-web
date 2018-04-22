import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ClientsService } from '../../../services/clients.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsTableComponent implements OnInit, AfterViewInit {
  clients: any;
  role: any;
  stateUploadStatus: any;
  allLogs: any;
  constructor(private http: HttpClient,
    private authService: AuthService,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  displayedColumns = ['PhoneNumber', 'Uin', 'Name', 'IsVerified', 'Email', 'Sex', 'BirthDate', 'Actions'];
  dataSource = new MatTableDataSource<Element>(this.clients);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.getDbClients('kaztel');
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadRole() {
    return localStorage.getItem('user.role');
  }

  getDbClients(service) {
    this.clientsService.getClients(service).subscribe(data => {
      this.clients = data['data']['docs'];
      this.dataSource = new MatTableDataSource<Element>(this.clients);
      this.dataSource.paginator = this.paginator;
    });
  }
}
