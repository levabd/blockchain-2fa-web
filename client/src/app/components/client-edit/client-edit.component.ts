import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientEditComponent implements OnInit {

  client: any = {};
  sex: string[] = ['Мужской', 'Женский'];
  hide = true;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClient(this.route.snapshot.params['id']);
  }

  getClient(id) {
    this.http.get('http://127.0.0.1:3002/clients/' + id).subscribe(data => {
      this.client = data;
    });
  }

  updateClient(id) {
    this.client.updated_date = Date.now();
    this.http.put('http://127.0.0.1:3002/clients/' + id, this.client)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/client-details', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

}
