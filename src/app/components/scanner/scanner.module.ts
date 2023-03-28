import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerComponent } from './scanner.component';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ScannerComponent],
  providers: [
    BarcodeScanner
  ],
  exports: [ScannerComponent]
})
export class ScannerComponentModule { }
