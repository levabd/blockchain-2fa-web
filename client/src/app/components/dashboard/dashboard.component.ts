import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ClientsService } from '../../services/clients.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  role: any;
  stateUploadStatus: any;
  dbClearStatus: any;
  allLogs: any;

  constructor(private http: HttpClient,
    private authService: AuthService,
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar) { }


  ngOnInit() {
    this.role = this.authService.isAdmin(this.authService.loadUser());
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 7000, });
  }

  uploadState(service) {
    this.clientsService.updateState(service).subscribe(data => {
      if (data['status'] && data['status'] === 200) {
        this.openSnackBar('Состояние блокчейн успешно загружено в БД.');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  uploadLog() {
    this.clientsService.getLogs().subscribe(data => {
      this.allLogs = data['data'];
    });
  }

  dbClear() {
    this.clientsService.deleteDatabaseCollection().subscribe(data => {
      if (data['status']) {
        if (data['status'] === 200) {
          this.openSnackBar('Коллекция блокчейн успешно удалена из БД');
        }
        if (data['status'] === 400) {
          this.openSnackBar('Ошибка удаления коллекции блокчейн из БД! Проверьте наполнение таблицы.');
        }
      } else {
        this.openSnackBar('Ответ от сервера не получен. Операция невозможна. Связитесь с системным администратором');
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
