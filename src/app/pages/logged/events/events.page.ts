import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Events } from 'src/app/interfaces/events';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage implements OnInit {
  cargando: boolean = false;
  events: Events[] = []
  constructor(
    private _apiSv: ApiService
  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(filter: any = {}) {
    this.cargando = true;
    this._apiSv.get("event/index", filter ? filter : null).then((r: any) => {
      this.events = r.events;
      this.cargando = false;
    }).catch(e => {
      this.cargando = false;
    })
  }

}
