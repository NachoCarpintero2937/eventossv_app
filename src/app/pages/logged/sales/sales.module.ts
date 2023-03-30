import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesPage } from './sales.page';

import { SalesPageRoutingModule } from './sales-routing.module';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { InicialesModule } from 'src/app/components/iniciales/iniciales.module';
import { DetailSaleComponent } from 'src/app/components/detail-sale/detail-sale.component';
import { DetailSaleModule } from 'src/app/components/detail-sale/detail-sale.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesPageRoutingModule,
    FilterModule,
    InicialesModule,
    DetailSaleModule
  ],
  entryComponents: [FilterComponent, DetailSaleComponent],
  declarations: [SalesPage]
})
export class SalesPageModule { }
