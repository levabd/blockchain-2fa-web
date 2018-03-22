import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientComponent implements OnInit {

  clients: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://176.36.70.236:3002/clients').subscribe(data => {
      console.log(data);
      this.clients = data;
    });
  }

}
