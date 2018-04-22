import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../services/auth.service';
import { ClientsService } from '../../services/clients.service';
import { environment } from '../../../environments/environment';

import Client from '../../models/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit, AfterViewInit {

  role: any;
  client: any;
  clientLog: any;
  edit: any = true;
  address: any;

  constructor(private http: HttpClient,
    private authService: AuthService,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute ) { }

  displayedColumns = ['Event', 'Status', 'Code', 'ExpiredAt', 'Embeded', 'ActionTime', 'Method', 'Cert'];
  dataSource = new MatTableDataSource<Element>(this.clientLog);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.role = this.authService.isAdmin(this.authService.loadUser());
    this.address = this.route.snapshot.params['id'];
    this.getClientDetail(this.route.snapshot.params['id']);
    this.editMode();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editMode() {
    if (this.route.snapshot.params['id'].includes('cd242e') && this.role === 'superadmin') { this.edit = false; }
  }

  getClientDetail(id) {
    this.clientsService.getClient(id).subscribe(data => {
      this.client = data;
      this.clientLog = data['Logs'];
      this.dataSource = new MatTableDataSource<Element>(this.clientLog);
      this.dataSource.paginator = this.paginator;
    },
      err => {
        console.log(err);
        return false;
      });
  }
}

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
