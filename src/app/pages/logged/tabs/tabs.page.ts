import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScannerComponent } from 'src/app/components/scanner/scanner.component';

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
    const escaner = await this._modalCtrl.create({
      component: ScannerComponent,
    });
    escaner.onDidDismiss().then((respuesta: any) => {
      if (respuesta && respuesta.data) {
        console.log(respuesta)
        const data = <any>respuesta.data;
        if (!data.cancelled && data.text) {
        }
      }
    });
    return await escaner.present().then(() => {
      setTimeout(() => {
      }, 2000);
    }).catch(() => {
    });
  }

}
