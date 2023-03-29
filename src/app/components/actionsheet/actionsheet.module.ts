import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonModal } from '@ionic/angular';
import { ActionsheetComponent } from './actionsheet.component';



@NgModule({
  declarations: [ActionsheetComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ActionsheetComponent]
})
export class ActionsheetModule { }
