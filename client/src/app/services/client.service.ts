import { environment } from '../../environments/environment';

import Client from '../models/client.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

    api_url = environment.apiUrl;
    clientUrl = `${this.api_url}/api/clients`;

    constructor(
        private http: HttpClient
    ) { }

    // Create client, takes a Client Object
    createClient(client: Client): Observable<any> {
        // returns the observable of http post request
        return this.http.post(`${this.clientUrl}`, client);
    }

    // Read client, takes no arguments
    getClients(): Observable<Client[]> {
        return this.http.get(this.clientUrl)
            .map(res => {
                // /Maps the response object sent from the server
                return res['data'].docs as Client[];
            });
    }
    // Update client, takes a Client Object as parameter
    editClient(client: Client) {
        const editUrl = `${this.clientUrl}`;
        // returns the observable of http put request
        return this.http.put(editUrl, client);
    }

    deleteClient(id: string): any {
        // Delete the object by the id
        const deleteUrl = `${this.clientUrl}/${id}`;
        return this.http.delete(deleteUrl)
            .map(res => {
                return res;
            });
    }

    // Default Error handling method.
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}
