import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

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

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute, ) { }

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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editMode() {
    if (this.route.snapshot.params['id'].includes('cd242e') && this.role === 'superadmin') { this.edit = false; }
  }

  getClientDetail(id) {
    this.http.get(`${environment.apiUrl}api/clients/${id}`).subscribe(data => {
      this.client = data;
      this.editMode();
      this.clientLog = data['Logs'];
      this.clientLog = data['Sex'];
      this.dataSource = new MatTableDataSource<Element>(this.clientLog);
      this.dataSource.paginator = this.paginator;
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
