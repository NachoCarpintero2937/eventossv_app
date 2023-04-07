import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Events } from 'src/app/interfaces/events';
import { Location } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { ToastService } from 'src/app/services/toast.service';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage implements OnInit {
  cargando: boolean = false;
  events: Events[] = [];
  event!: Events;
  numbers: any;

  constructor(
    private _apiSv: ApiService,
    private _navctrl: NavController,
    private _modalCtrl: ModalController,
    private _toastSv: ToastService
  ) {
    this.numbers = Array(10).fill(0).map((x, i) => i);

    this._toastSv.confirm.subscribe((r: boolean) => {
      if (r)
        this.openCreateAndEditTicket()
    })
  }

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

  back() {
    this._navctrl.navigateRoot('logged/tabs/landing');
  }

  async openCreateAndEditTicket(ticket?: any) {
    const modal = await this._modalCtrl.create({
      component: CreateTicketComponent,
      componentProps: {
        data: this.event,
        ticket: ticket
      }
    });
    modal.present();
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {
        this.getEvents();
      }
    });
  }

  async openCreateAndEditEvent(event?: any) {
    const modal = await this._modalCtrl.create({
      component: CreateEventComponent,
      componentProps: {
        event: event ? event : null
      }
    });
    modal.present();
    modal.onDidDismiss().then((respuesta: any) => {
      if (respuesta && respuesta.data && respuesta.data?.id) {
        console.log(respuesta.data.id)
        this.event = respuesta.data;
        this._toastSv.presentConfirm("Asignación de tickets", "¿Querés asignar tickets al último evento creado?")
        // this.getEvent();
      }
    });
  }

  doRefresh(event: any) {
    this.getEvents();
    setTimeout(() => {
      event.target.complete();
    }, 750);
  }
}
