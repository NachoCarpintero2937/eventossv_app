import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ScannerComponent } from 'src/app/components/scanner/scanner.component';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { VerifyQrComponent } from 'src/app/components/verify-qr/verify-qr.component';
import { ActionsheetModule } from 'src/app/components/actionsheet/actionsheet.module';
import { ActionsheetComponent } from 'src/app/components/actionsheet/actionsheet.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ActionsheetModule
  ],
  declarations: [TabsPage],
  providers: [BarcodeScanner],
  entryComponents: [ScannerComponent, VerifyQrComponent, ActionsheetComponent]
})
export class TabsPageModule { }
