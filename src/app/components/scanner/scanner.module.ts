import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { IonicModule } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ScannerComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [ScannerComponent],
  providers: [
    BarcodeScanner
  ],
})
export class ScannerModule { }
