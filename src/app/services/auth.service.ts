import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient,
    private _globalsSv: GlobalService,
    private _navCtrl: NavController,
    private _toast: ToastService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.isLogged())
      return true;
    else
      this._navCtrl.navigateRoot(['/login']);
    return false;
  }
  isLogged() {
    var logged = localStorage.getItem("user_data");
    if (logged)
      return true;
    else
      return false;
  }
  logout(msj?: any) {
    localStorage.removeItem("user_data");
    this._navCtrl.navigateRoot(['/login'])

  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user_data')!)
  }


}
