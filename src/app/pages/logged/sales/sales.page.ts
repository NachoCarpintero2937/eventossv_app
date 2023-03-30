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
  numbers: any;
  constructor
    (
      private _apiSv: ApiService,
      private _modalCtrl: ModalController,
      private _fb: FormBuilder,
      private _navctrl: NavController,
      private _location: Location
    ) {
    this.numbers = Array(20).fill(0).map((x, i) => i);
  }
  form = this._fb.group({
    name: [null]
  })
  ngOnInit(): void {
    this.getSales();
    this.getEvents();
  }
  doRefresh(event: any) {
    this.getSales();
    setTimeout(() => {
      event.target.complete();
    }, 750);
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

  generateRandomColor() {
    let maxVal = 0xFFFFFFFF; // 16777215
    let randomNumber: any = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
  }

}
