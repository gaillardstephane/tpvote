import { Client } from '../model/client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class ServiceClient {

   constructor(private http: Http) { }

     getClients(): Observable<any> {
    return this.http.get('http://localhost:8080/SimpleMavenJPAWeb/clients')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Big issue!'));
  }

}
