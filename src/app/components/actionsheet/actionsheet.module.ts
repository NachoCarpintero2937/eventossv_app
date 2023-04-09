import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonModal } from '@ionic/angular';
import { ActionsheetComponent } from './actionsheet.component';
import { InicialesModule } from '../iniciales/iniciales.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActionsheetComponent],
  imports: [
    CommonModule,
    IonicModule,
    InicialesModule,
    RouterModule
  ],
  exports: [ActionsheetComponent]
})
export class ActionsheetModule { }
