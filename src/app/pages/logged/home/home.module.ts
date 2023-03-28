import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ScannerComponentModule } from 'src/app/components/scanner/scanner.module';
import { VerifyQrModule } from 'src/app/components/verify-qr/verify-qr.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScannerComponentModule,
    HomePageRoutingModule,
    VerifyQrModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
