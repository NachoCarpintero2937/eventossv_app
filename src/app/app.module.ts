import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { InicialesPipe } from './pipes/iniciales.pipe';
import { HttpconfigInterceptor } from './interceptors/httpconfig.interceptor';
registerLocaleData(localeEs);
@NgModule({
  declarations: [AppComponent, InicialesPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpconfigInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent],

})
export class AppModule { }
