import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientCreateComponent implements OnInit {

  client = {};
  sex: string[] = ['Мужской', 'Женский'];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveClient() {
    this.http.post('http://176.36.70.236:3002/clients', this.client)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/client-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
