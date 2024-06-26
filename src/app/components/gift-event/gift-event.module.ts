import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftEventComponent } from './gift-event.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GiftEventComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [GiftEventComponent]
})
export class GiftEventModule { }
