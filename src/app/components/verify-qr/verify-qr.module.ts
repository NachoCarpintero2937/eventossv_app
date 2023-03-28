import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyQrComponent } from './verify-qr.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [VerifyQrComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [VerifyQrComponent]
})
export class VerifyQrModule { }
