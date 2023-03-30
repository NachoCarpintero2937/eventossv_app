import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sales',
  templateUrl: 'sales.page.html',
  styleUrls: ['sales.page.scss']
})
export class SalesPage implements OnInit {

  sales: any;
  cargando: boolean = false;
  events: any;
  constructor
    (
      private _apiSv: ApiService,
      private _modalCtrl: ModalController,
      private _fb: FormBuilder,
      private _navctrl: NavController,
      private _location: Location
    ) { }
  form = this._fb.group({
    name: [null]
  })
  ngOnInit(): void {
    this.getSales();
    this.getEvents();
  }
  getSales(filter: any = {}) {
    this.cargando = true;
    this._apiSv.get("sale/index", filter ? filter : null).then((r: any) => {
      this.sales = r.sales;
      this.cargando = false;
    }).catch(e => {
      this.cargando = false;
    })
  }
  filter(event: any) {
    console.log(this.form.get('name')?.value)
    this.getSales({
      name: this.form.get('name')?.value
    })
  }
  async openFilters() {
    const modal = await this._modalCtrl.create({
      component: FilterComponent,
      componentProps: {
        fields: {
          name: '',
          event_id: '',
          status: '',
        },
        events: this.events
      }
    });
    modal.present();
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {
        this.getSales(respuesta.data)
      }
    });
  }
  back() {
    this._navctrl.navigateRoot('/logged/tabs/landing');
  }
  getEvents(filter: any = {}) {
    this._apiSv.get("event/index", filter ? filter : null).then((r: any) => {
      this.events = r.events;
    }).catch(e => {
    })
  }

}
