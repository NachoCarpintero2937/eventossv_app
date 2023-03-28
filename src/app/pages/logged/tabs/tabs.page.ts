import { Component, OnInit } from '@angular/core';
import { BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { ScannerComponent } from 'src/app/components/scanner/scanner.component';
import { VerifyQrComponent } from 'src/app/components/verify-qr/verify-qr.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private _modalCtrl: ModalController) { }
  ngOnInit(): void {

  }
  ionViewDidEnter() {

  }

  async scanQR() {
    const modal = await this._modalCtrl.create({
      component: ScannerComponent,
    });
    modal.present();
    modal.onDidDismiss().then((respuesta) => {
      if (respuesta && respuesta.data) {
        const data = <BarcodeScanResult>respuesta.data;
        if (!data.cancelled && data.text) {
          this.openVerify(data.text);
        }
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
