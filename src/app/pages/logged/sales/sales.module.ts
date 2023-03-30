import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesPage } from './sales.page';

import { SalesPageRoutingModule } from './sales-routing.module';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { FilterComponent } from 'src/app/components/filter/filter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesPageRoutingModule,
    FilterModule
  ],
  entryComponents: [FilterComponent],
  declarations: [SalesPage]
})
export class SalesPageModule { }
