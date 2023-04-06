import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.page.html',
  styleUrls: ['./view-ticket.page.scss'],
})
export class ViewTicketPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private _apiSv: ApiService,
    private _modalCtrl: ModalController) {
    // Cerramos modales si venimos de eventos
    this._modalCtrl.dismiss();
  }
  id!: number;
  cargando!: boolean;
  event: any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((r: any) => {
      this.id = parseInt(r?.id)
      if (this.id)
        this.getEvent()
      else
        this.navCtrl.navigateRoot('logged/tabs/landing')
    })
  }

  getEvent() {
    this.cargando = true;
    this._apiSv.get("event/index", { id: this.id }).then((r: any) => {
      this.event = r.events[0];
      this.cargando = false;
    }).catch(e => {
      this.cargando = false;
    })
  }
  back() {
    this.navCtrl.back();
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



}
