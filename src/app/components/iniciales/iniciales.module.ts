import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialesComponent } from './iniciales.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [InicialesComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [InicialesComponent]
})
export class InicialesModule { }
