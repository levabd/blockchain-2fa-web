import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


import { AuthService } from './auth.service';

@Injectable()
export class ClientsService {
    isDev: boolean;
    authToken: any;
    user: any;
    role: any;

    constructor(private http: Http, private authService: AuthService) {
        this.isDev = true;  // Change to false before deployment
    }

    createHeaders() {
        const headers = new Headers();
        headers.append('Authorization', this.authService.loadToken());
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getClient(id) {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clients/${id}`, { headers: headers })
            .map(res => res.json());
    }

    getClients(service) {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clientsdb?service=${service}`, { headers: headers })
            .map(res => res.json());
    }

    checkPersonalAccount(account) {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clientsdb/account?account=${account}`, { headers: headers })
            .map(res => res.json());
    }

    createClient(client) {
        const headers = this.createHeaders();
        return this.http.post(`${environment.apiUrl}api/clients/`, client, { headers: headers })
            .map(res => res.json());
    }

    updateClient(client) {
        const headers = this.createHeaders();
        return this.http.post(`${environment.apiUrl}api/clients/update/`, client, { headers: headers })
            .map(res => res.json());
    }

    checkPhoneNumber(service, phoneNumber) {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clients/check/${service}/${phoneNumber}`, { headers: headers })
            .map(res => res.json());
    }

    updateState(service) {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clients/state/update?service=${service}`, { headers: headers })
            .map(res => res.json());
    }

    getLogs() {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clients/state/log`, { headers: headers })
            .map(res => res.json());
    }

    deleteDatabaseCollection() {
        const headers = this.createHeaders();
        return this.http.get(`${environment.apiUrl}api/clientsdb/drop`, { headers: headers })
            .map(res => res.json());
    }

}
