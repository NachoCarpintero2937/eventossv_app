import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {

  scannedCode = null;
  options!: BarcodeScannerOptions;
  constructor
    (
      private _barcode: BarcodeScanner,
      private _modal: ModalController
    ) { }
  ngOnInit(): void {

  }
  ionViewDidEnter() {
    this.scanQR();
  }

  scanQR() {
    this.options = {
      prompt: 'Presente el código QR dentro del cuadrado.'
    }
    this._barcode.scan(this.options).then((data) => {
      this._modal.dismiss(data);
    }, (error) => {
      this._modal.dismiss(error);
    })
  }
}
