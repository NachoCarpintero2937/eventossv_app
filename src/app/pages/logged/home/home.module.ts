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
import { RouterModule } from '@angular/router';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
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
    GiftEventModule,
    RouterModule
  ],
  declarations: [HomePage],
  entryComponents: [GiftEventComponent, CreateTicketComponent]
})
export class HomePageModule { }
