import { Component, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { IonFab, IonSlides, ModalController } from '@ionic/angular';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
import { GiftEventComponent } from 'src/app/components/gift-event/gift-event.component';
import { Events } from 'src/app/interfaces/events';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild('slide') slide: any;
  @ViewChild('fab') fab!: IonFab;
  constructor(
    private apiSv: ApiService,
    private _toastSv: ToastService,
    public _authSv: AuthService,
    private _modalCtrl: ModalController) {
    this._toastSv.confirm.subscribe((r: boolean) => {
      if (r)
        this.openCreateAndEditTicket()
    })
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }
  event: any;
  events: Events[] = [];
  cargando: boolean = false;
  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.getEvent();
  }

  getEvent() {
    this.cargando = true;
    this.apiSv.get('event/get').then((r: any) => {
      this.cargando = false;
      if (r?.events[0].active == 1) {
        this.event = r?.events[0];
      }
      this.getEvents()
    }).catch((e: any) => {
      this.cargando = false;
      this._toastSv.presentError("Error en el servidor");
    })
  }

  doRefresh(event: any) {
    this.getEvent();
    setTimeout(() => {
      event.target.complete();
    }, 750);
  }

  getEvents() {
    this.cargando = true;
    this.apiSv.get('event/index').then((r: any) => {
      this.cargando = false;
      this.events = r?.events;
    }).catch((e: any) => {
      this.cargando = false;
      this._toastSv.presentError("Error en el servidor");
    })
  }

  async openGift() {
    const modal = await this._modalCtrl.create({
      component: GiftEventComponent,
      componentProps: {
        data: this.event?.tickets[0]
      }
    });
    modal.present();
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {

      }
    });
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
        this.getEvent();
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
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {
        this.event = respuesta.data;
        this._toastSv.presentConfirm("Asignación de tickets", "¿Querés asignar tickets al último evento creado?")
        // this.getEvent();
      }
    });
  }

  AvaliableTickets(tickets: any) {
    if (tickets) {
      var available = tickets.filter((filter: any) => filter.available == 1);
      if (available[0])
        return true;
      else
        return false;
    } else {
      return false;
    }
  }

  sliderChanges(event: any) {
    this.fab.close();
    event.target.getActiveIndex().then(
      (index: any) => {
        this.event = this.events[index];
      });

  }
}
