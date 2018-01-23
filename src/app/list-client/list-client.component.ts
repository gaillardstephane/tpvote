import { Client } from '../model/client';
import { ServiceClient } from '../servicej/serviceclient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
 providers: [ServiceClient]
})

export class ListClientComponent implements OnInit {

clients: Client[];


  constructor(private service: ServiceClient) {

  }

getClient() {
    this.service.getClients().subscribe(data => this.clients = data,
      error => console.log('error inservice'));
  }

  ngOnInit() {
    this.getClient();
  }

}
