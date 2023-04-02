import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftEventComponent } from './gift-event.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [GiftEventComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GiftEventComponent]
})
export class GiftEventModule { }
