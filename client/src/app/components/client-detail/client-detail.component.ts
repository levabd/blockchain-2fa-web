import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit {

  client = {};
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getClientDetail(this.route.snapshot.params['id']);
  }



  getClientDetail(id) {
    this.http.get('http://127.0.0.1:3002/clients/' + id).subscribe(data => {
      this.client = data;
    });
  }

  deleteClient(id) {
    this.http.delete('http://127.0.0.1:3002/clients/' + id)
      .subscribe(res => {
          this.router.navigate(['/clients']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
