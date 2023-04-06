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
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { CreateEventModule } from 'src/app/components/create-event/create-event.module';
import { CreateTicketModule } from 'src/app/components/create-ticket/create-ticket.module';
import { NoEventsModule } from 'src/app/components/no-events/no-events.module';
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
    RouterModule,
    CreateEventModule,
    CreateTicketModule,
    NoEventsModule
  ],
  declarations: [HomePage],
  entryComponents: [GiftEventComponent, CreateTicketComponent, CreateEventComponent]
})
export class HomePageModule { }
