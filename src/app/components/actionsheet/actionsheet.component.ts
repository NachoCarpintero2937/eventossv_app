import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
})
export class ActionsheetComponent implements OnInit {
  cargando: boolean = false;
  event: any;
  constructor(
    private modalCtrl: ModalController,
    private _apiSv: ApiService,
    private _toastSv: ToastService,
    public _authSv: AuthService,
    private _navCtrl: NavController,
    private _modalCtrl: ModalController) { }

  ngOnInit() {
    this.getEvent();
  }
  getEvent() {
    this.cargando = true;
    this._apiSv.get('event/get').then((r: any) => {
      this.cargando = false;
      if (r?.events[0].active == 1) {
        this.event = r?.events[0];
      }
    }).catch((e: any) => {
      this.cargando = false;
      this._toastSv.presentError("Error en el servidor");
    })
  }
  close() {
    return this.modalCtrl.dismiss();
  }
  logout() {
    this.close();
    this._authSv.logout("Sesión cerrada correctamente");
  }
  goToProfile() {
    this._navCtrl.navigateRoot(['logged/tabs/profile']).then((r) => {
      this._modalCtrl.dismiss();
    })
  }
}
