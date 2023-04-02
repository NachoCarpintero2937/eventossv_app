import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ScannerComponentModule } from 'src/app/components/scanner/scanner.module';
import { VerifyQrModule } from 'src/app/components/verify-qr/verify-qr.module';
import localeEs from '@angular/common/locales/es';
import { InicialesModule } from 'src/app/components/iniciales/iniciales.module';
import { GiftEventComponent } from 'src/app/components/gift-event/gift-event.component';
import { GiftEventModule } from 'src/app/components/gift-event/gift-event.module';
registerLocaleData(localeEs);
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScannerComponentModule,
    HomePageRoutingModule,
    VerifyQrModule,
    InicialesModule,
    GiftEventModule
  ],
  declarations: [HomePage],
  entryComponents: [GiftEventComponent]
})
export class HomePageModule { }
