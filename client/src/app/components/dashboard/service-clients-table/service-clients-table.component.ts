import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ClientsService } from '../../../services/clients.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-service-clients-table',
  templateUrl: './service-clients-table.component.html',
  styleUrls: ['./service-clients-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceClientsTableComponent implements OnInit, AfterViewInit {
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
    this.getDbClients('tfa');
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