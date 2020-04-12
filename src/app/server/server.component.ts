import {Component} from '@angular/core';

@Component(
  {
selector: 'app-server',
    templateUrl: './server.component.html'
  }
)
export class ServerComponent {

  serverId = 10;
  serverStat = 'online';

  constructor() {
    this.serverStat = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getCOLOR() {
return this.serverStat === 'online' ? 'green' : 'red';
  }
}
