import { EventEmitter, Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private _toastCtrl: ToastController,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController
  ) { }
  isLoading = false;
  confirm: EventEmitter<boolean> = new EventEmitter();
  async presentToast(message: any) {
    const toast = await this._toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  async presentError(message: any) {
    if (await this._toastCtrl.getTop()) {
      await this._toastCtrl.dismiss();
    }
    const toast = await this._toastCtrl.create({
      message: message,
      duration: 4500,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
  async presentSuccess(message: any) {
    if (await this._toastCtrl.getTop()) {
      await this._toastCtrl.dismiss();
    }
    const toast = await this._toastCtrl.create({
      message: message,
      duration: 4500,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }
  async presentConfirm(header: any, message: any, onOk: boolean) {
    let buttons = [];
    if (onOk) {
      buttons.push({
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.confirm.emit(false);
        }
      });
      buttons.push({
        text: 'Aceptar',
        handler: () => {
          this.confirm.emit(true);
        }
      });
    } else {
      buttons.push({
        text: 'Leido',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => { }
      });
    }
    const alert = await this._alertCtrl.create({
      header: header,
      message: message,
      buttons: buttons
    });
    await alert.present();
  }
  async present() {
    this.isLoading = true;
    return await this._loadingCtrl.create({
      message: "Cargando",
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  async dismiss() {
    this.isLoading = false;
    return await this._loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  async presentSuccessConexion(message: any) {
    if (await this._toastCtrl.getTop()) {
      await this._toastCtrl.dismiss();
    }
    const toast = await this._toastCtrl.create({
      message: message,
      duration: 4500,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  async presentErrorConexion(message: any) {
    if (await this._toastCtrl.getTop()) {
      await this._toastCtrl.dismiss();
    }
    const toast = await this._toastCtrl.create({
      message: message,
      duration: 4500,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

}