import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsPage } from './events.page';
import { EventsPageRoutingModule } from './events-routing.module';
import { CreateTicketComponent } from 'src/app/components/create-ticket/create-ticket.component';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { CreateEventModule } from 'src/app/components/create-event/create-event.module';
import { CreateTicketModule } from 'src/app/components/create-ticket/create-ticket.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventsPageRoutingModule,
    CreateEventModule,
    CreateTicketModule
  ],
  declarations: [EventsPage],
  entryComponents: [CreateTicketComponent, CreateEventComponent]
})
export class EventsPageModule { }
