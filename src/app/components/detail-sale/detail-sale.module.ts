import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetailSaleComponent } from './detail-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicialesModule } from '../iniciales/iniciales.module';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  declarations: [DetailSaleComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    InicialesModule,
    QRCodeModule
  ],
  exports: [DetailSaleComponent]
})
export class DetailSaleModule { }
