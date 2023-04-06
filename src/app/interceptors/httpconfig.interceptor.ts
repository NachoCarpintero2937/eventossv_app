import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { Observable, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { CommonService } from '../services/common.service';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

  constructor
    (
      private _authSv: AuthService,
      private _alertSv: ToastService,
      private _commonSv: CommonService
    ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let data: any = localStorage.getItem("user_data");
    const user_data: any = data ? JSON.parse(data) : '';
    if (user_data.authorization?.token) {
      request = request.clone({
        setHeaders: {
          Authorization: "bearer " + user_data.authorization?.token
        },
        body: request.body
      });
    }
    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // cacheo de estado
            if (event && event.body && typeof event.body.status != 'undefined' && !event.body.status && !event.body.error && typeof event.body.error != 'undefined') {
              if (event && event.body && typeof event.body.message != 'undefined') {
                this._alertSv.presentError(event.body.data.respuesta);
              } else {
                this._alertSv.presentError("Hubo un error en la solicitud");

              }
            }
          }
          return event;
        }
      ),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 500:
            this._alertSv.presentError("Error en el servidor (500)");
            break;
          case 401:
            this._commonSv.closeModal.emit(true)
            this._authSv.logout("Sesión expirada,ingrese nuevamente");
            break;
          case 403:
            this._commonSv.closeModal.emit(true)
            this._authSv.logout("Sesión expirada,ingrese nuevamente");
            break;
          case 404:
            this._alertSv.presentError("Error en el servidor (404)");
            break;
          default:
            this._alertSv.presentError("Error intente nuevamente más tarde");
            break;
        }
        return throwError(new Error(error.error.message));
      }))
  }
}