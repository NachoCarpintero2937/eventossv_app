import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-verify-qr',
  templateUrl: './verify-qr.component.html',
  styleUrls: ['./verify-qr.component.scss'],
})
export class VerifyQrComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private _apiSv: ApiService,
    private _toastSv: ToastService) { }
  data: any;
  id!: number;
  ngOnInit() {
    this.id = parseInt(this.data.split('@')[1]);
    if (this.id) {
      this.getVerifyQr();
    } else {
      this.data = {
        status: false,
        message: "Ticket incorrecto"
      }
    }
  }

  confirm() {
    return this.modalCtrl.dismiss();
  }
  getVerifyQr() {
    this._toastSv.present();
    this._apiSv.get("sale/verify", { item_id: this.id }).then((r: any) => {
      this._toastSv.dismiss();
      this.data = r;
    }).catch(e => {
      this._toastSv.dismiss();
      var r = {
        status: false,
        message: "Error en el servidor intente nuevamente mas tarde"
      }
    });
  }

}
