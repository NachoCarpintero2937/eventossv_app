import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoEventsComponent } from './no-events.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NoEventsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NoEventsComponent]
})
export class NoEventsModule { }
