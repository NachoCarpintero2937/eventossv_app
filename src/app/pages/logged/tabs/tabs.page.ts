import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ActionsheetComponent } from 'src/app/components/actionsheet/actionsheet.component';
import { ScannerComponent } from 'src/app/components/scanner/scanner.component';
import { VerifyQrComponent } from 'src/app/components/verify-qr/verify-qr.component';
import { CommonService } from 'src/app/services/common.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private _modalCtrl: ModalController,
    private _toastSv: ToastService,
    private _commonSv: CommonService) {
    // esto cierra todos los modals abiertos en caso de mate la sesion el interceptor
    this._commonSv.closeModal.subscribe(r => {
      this._modalCtrl.dismiss();
    })
  }
  ngOnInit(): void {

  }
  ionViewDidEnter() {

  }

  async scanQR() {
    this._toastSv.present();
    const modal = await this._modalCtrl.create({
      component: ScannerComponent,
    });
    modal.present().then(() => {
      this._toastSv.dismiss();
    })
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {
        const data = <BarcodeScanResult>respuesta.data;
        if (!data.cancelled && data.text) {
          this.openVerify(data.text);
        }
      }
    });
  }
  async openModal() {
    const modal = await this._modalCtrl.create({
      component: ActionsheetComponent,
    });
    modal.present();
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {

      }
    });
  }

  async openVerify(data: string) {
    const modal = await this._modalCtrl.create({
      component: VerifyQrComponent,
      componentProps: {
        data: data
      }
    });
    modal.present();
  }
}
