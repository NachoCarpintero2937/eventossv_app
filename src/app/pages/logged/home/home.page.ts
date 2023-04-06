import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
import { GiftEventComponent } from 'src/app/components/gift-event/gift-event.component';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    private apiSv: ApiService,
    private _toastSv: ToastService,
    public _authSv: AuthService,
    private _modalCtrl: ModalController) { }
  event: any;
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

  AvaliableTickets(tickets: any) {
    var available = tickets.filter((filter: any) => filter.available == 1);
    if (available[0])
      return true;
    else
      return false;
  }
}
