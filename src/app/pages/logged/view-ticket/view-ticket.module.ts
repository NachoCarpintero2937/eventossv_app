import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTicketPage } from './view-ticket.page';
import { ViewTicketPageRoutingModule } from './view-ticket-routing.module';
import { CreateTicketModule } from 'src/app/components/create-ticket/create-ticket.module';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTicketPageRoutingModule,
    CreateTicketModule,
  ],
  entryComponents: [CreateTicketComponent],
  declarations: [ViewTicketPage]
})
export class CreateTicketPageModule { }
