import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    private apiSv: ApiService,
    private _toastSv: ToastService,
    public _authSv: AuthService) { }
  event: any;
  cargando: boolean = false;
  ngOnInit(): void {

  }

  ionViewDidEnter() {
    this.getEvent();
  }

  getEvent() {
    this.cargando = true;
    this.apiSv.get('event/get').then((r: any) => {
      this.cargando = false;
      if (r?.events[0].active == 1) {
        this.event = r?.events[0];
      }
    }).catch((e: any) => {
      this.cargando = false;
      this._toastSv.presentError("Error en el servidor");
    })
  }
  doRefresh(event: any) {
    this.getEvent();
    setTimeout(() => {
      event.target.complete();
    }, 750);
  }
}
